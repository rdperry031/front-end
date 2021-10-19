import React, { useState } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';

export default function PotluckItems(props) {
    const { handleSubmit } = props;
    const [ itemFields, setItemFields ] = useState([{food_name: '', food_description:''}])
    
    const handleChange = (i, e) =>{
        let newItemField = [...itemFields];
        newItemField[i][e.target.name] = e.target.value;
        setItemFields(newItemField)
    }

    const addItemFields = () => {
        setItemFields([...itemFields, {food_name: '', food_description: ''}])
    }

    const removeItemField = (i) => {
        let removedItemField = [...itemFields]
        removedItemField.splice(i, 1)
        setItemFields(removedItemField)
    }
    return (
        <form onSubmit={handleSubmit}>
          {itemFields.map((field, index) => ( 
            <div key={index}>
            <label htmlFor='food_name'>Item</label>
             <input
                id='food_name'
                name='food_name'
                value={field.food_name}
                onChange={e => handleChange(index, e)}
             /> 
             <label htmlFor='food_description'>Description</label>
             <input
                id='food_description'
                name='food_description'
                value={field.food_description}
                onChange={e => handleChange(index, e)}
             /> 
             <button type='button' onClick={() => addItemFields()}>+</button>
             {index ? <button type='button' onClick={() => removeItemField(index)}>-</button> : null}
             </div>
             ))}
        </form>
    )
}
