import React, { useState } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import { useHistory } from 'react-router-dom';


export default function AddEvent() {
    const { push } = useHistory();

    const [formValues, setFormValues] = useState({
        potluck_name: '',
        potluck_description:'',
        potluck_date: '',
        potluck_time: '',
        potluck_location: '',
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
            console.log(res)
            push('/upcomingevents')
        })
        .catch(err => console.log({ err }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor= 'potluck_name'>Potluck Name</label>
             <input
                id='potluck_name'
                value={formValues.potluck_name}
                name='potluck_name'
                onChange={handleChange}
                />
            <label htmlFor= 'potluck_time'>Time</label>
            <label htmlFor= 'potluck_description'>Potluck Description</label>
             <textarea
                id='potluck_description'
                value={formValues.potluck_description}
                name='potluck_description'
                type='text'
                onChange={handleChange}
                rows='10'
                cols='40'
             />
            <label htmlFor='potluck_time'>Time</label> 
             <input 
                id='potluck_time'
                value={formValues.potluck_time}
                name='potluck_time'
                type='time'
                onChange={handleChange}
                />
            <label htmlFor='potluck_date'>Date</label>
             <input 
                id='potluck_date'
                value={formValues.potluck_date}
                name='potluck_date'
                type='date'
                onChange={handleChange}
             />
            <label htmlFor='potluck_location'>Location</label> 
             <input
                id='potluck_location'
                value={formValues.potluck_location}
                name='potluck_location'
                onChange={handleChange}
             />
            <button>Create Potluck</button>
        </form>
    )
}
