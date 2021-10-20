import React from 'react';


export default function Event(props) {
    
    const { potluck, handleDelete, handleEditSelect } = props

    if (!potluck) {
        return <h3>Working on getting event information...</h3>
    }
    return (
        <div>
            <h2>{potluck.potluck_name}</h2>
            <div>
                <p>Location: {potluck.potluck_location}</p>
                <p>Time: {potluck.potluck_time}</p>
                <p>Date: {potluck.potluck_date}</p>
            </div>
            <p>{potluck.potluck_description}</p>
            <div>
                <button onClick={handleDelete}>Delete Event</button>
                <button>Edit Event</button>
            </div>
            
        </div>
    )
}
