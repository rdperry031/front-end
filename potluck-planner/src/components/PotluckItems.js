import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';


export default function PotluckItems() {

    const [ itemFields, setItemFields ] = useState({food_name: '', food_description:''});
    const [ foodItems, setFoodItems ] = useState([]);

    const handleChange = (e) =>{
        setItemFields({
            ...itemFields, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`/foods`, itemFields)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log({ err }))
    }

    useEffect(() => {
        axiosWithAuth().get(`/foods`)
        .then(res => {
            setFoodItems(res.data)
        })
    })

    const deleteFood = (id) => {
        setFoodItems(foodItems.filter(item => item.food_id !== +id))
    }

    const handleDelete = (id) => {
        axiosWithAuth().delete(`/foods/${id}`)
            .then(res => {
                deleteFood(id)
            })
            .catch(err => console.log({ err }))
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='food_name'>Item</label>
             <input
                id='food_name'
                name='food_name'
                value={itemFields.food_name}
                onChange={e => handleChange(e)}
             /> 
             <label htmlFor='food_description'>Description</label>
             <input
                id='food_description'
                name='food_description'
                value={itemFields.food_description}
                onChange={e => handleChange(e)}
             /> 
            
             <button>Add items</button>
        </form>
     <div className='foodContainer'>
         {foodItems.map(food =>{
             return (
                <div >
                 <p>{food.food_name}: {food.food_description}</p> 
                 <button onClick={() => {handleDelete(food.food_id)} }>remove item</button>
                </div>
             )
         })}
     </div>
    </div>
    )
}
