import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utilities/axiosWithAuth';
import { useParams } from 'react-router';
import PotluckItems from './PotluckItems';

export default function Potluck() {
    const{id} = useParams();
    
    
    const[potluckName, setPotluckName] = useState([]);
    const[potluck, setPotluck] = useState([]);
    const[foodItems, setFoodItems] = useState([]);
    
   
    const getPotluckName = () => {
        axiosWithAuth().get(`/potlucks/${id}`)
            .then(res => {
                setPotluckName(res.data)
            })
            .catch(err => console.log({ err }))
    }
   
    const getPotluck = () => {
        axiosWithAuth().get(`/potlucks/${id}`)
            .then(res => {
                setPotluck(res.data.details)
            })
    }

    useEffect(() => {
        getPotluck();
        getPotluckName()
    },[])

     useEffect(() => {
         axiosWithAuth().get(`/foods`)
            .then(res => {
                setFoodItems(res.data)
            })
            .catch(err => console.log({ err }))
     }, [])
    

    return (
        <div>
            {<h1>{potluckName.potluck_name}</h1> }
           { <p> {potluck.potluck_description}<br/>
            {potluck.potluck_date}<br/>
            {potluck.potluck_time}<br/>
        {potluck.potluck_location}</p> }
                <h2>Food:</h2>
               <PotluckItems/>
        </div>
    )
}
