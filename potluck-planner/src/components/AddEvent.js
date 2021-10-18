import React, { useState } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function AddEvent() {
    const { push } = useHistory();

    const [formValues, setFormValues] = useState({
        name: '',
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
        // axiosWithAuth().post(`/potlucks`, formValues)
        // .then(res => {
        //     push('/upcomingevents')
        // })
        // .catch(err => console.log(err))
        setTimeout(() => {
            alert(JSON.stringify(formValues, null, 2));
          },1000)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor= 'potluck-name'>Potluck Name</label>
             <input
                id='potluck-name'
                value={formValues.name}
                name='name'
                onChange={handleChange}
                />
            <label htmlFor= 'time'>Time</label>
             <input 
                id='time'
                value={formValues.time}
                name='time'
                type='time'
                onChange={handleChange}
                />
            <label htmlFor='date'>Date</label>
             <input 
                id='date'
                value={formValues.date}
                name='date'
                type='date'
                onChange={handleChange}
             />
            <label htmlFor='location'>Location</label> 
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
