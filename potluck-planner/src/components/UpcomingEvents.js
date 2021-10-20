import React, { useEffect, useState } from 'react';
import Event from './Event';
import { useHistory } from "react-router";
import axiosWithAuth from "../utilities/axiosWithAuth";

export default function UpcomingEvents() {
    const { push } = useHistory();
    const initialPotlucks = [];
    const [potlucks, setPotlucks] = useState(initialPotlucks)

    const handleAdd = () => {
        push("/add");
      };

    const getPotlucks = () => {
        axiosWithAuth()
            .get("/potlucks")
            .then(res => {
                console.log(res.data);
                setPotlucks(res.data);
            })
            .catch((err) => {
                console.log(err.response);
              });
    }

    useEffect(()=> {
        getPotlucks()
    }, [])

    return (
        <div>
            <button onClick={handleAdd}>
                Create a Potluck Event.
            </button>
            <h3>Upcoming Potlucks</h3>
            {
                potlucks.map(potluck=> {
                    return(<div key={potluck.id}>
                        <Event potluck={potluck}/>
                    </div>)
                })
            }
        </div>
    )
}
