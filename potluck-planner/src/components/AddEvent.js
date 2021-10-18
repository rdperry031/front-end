import React, { useState } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function AddEvent() {
    const { push } = useHistory();

    const [formValues, setFormValues] = useState({
        name: '',
        description:'',
        time: '',
        date: '',
        location: '',
        food:''
    });
    
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post(`/potlucks`, formValues)
        .then(res => {
            push('/upcomingevents')
        })
        .catch(err => console.log({ err }))
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor= 'potluck_name'>Potluck Name</label>
             <input
                id='potluck_name'
                value={formValues.name}
                name='name'
                onChange={handleChange}
                />
            <label htmlFor= 'potluck_time'>Time</label>
            <label htmlFor= 'potluck_description'>Potluck Description</label>
             <input
                id='potluck_description'
                value={formValues.description}
                name='description'
                type='text'
                onChange={handleChange}
             />
             <input 
                id='time'
                value={formValues.time}
                name='time'
                type='time'
                onChange={handleChange}
                />
            <label htmlFor='potluck_date'>Date</label>
             <input 
                id='date'
                value={formValues.date}
                name='date'
                type='date'
                onChange={handleChange}
             />
            <label htmlFor='potluck_location'>Location</label> 
             <input
                id='location'
                value={formValues.location}
                name='location'
                onChange={handleChange}
             />
            <button>Create Potluck</button>
        </form>
    )
}
