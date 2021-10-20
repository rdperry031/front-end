import React, { useEffect, useState } from 'react';
import Event from './Event';
import EditEvent from './EditEvent';
import axiosWithAuth from "../utilities/axiosWithAuth";
import { useHistory } from 'react-router-dom';

export default function UpcomingEvents() {
    const { push } = useHistory();
    const [potlucks, setPotlucks] = useState([])
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState();
  

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

    const deletePotluck = (id)=> {
        setPotlucks(potlucks.filter(potluck=> potluck.potluck_id !== +id));
    }

    const handleDelete = (id) => {
        axiosWithAuth()
            .delete(`/potlucks/${id}`)
            .then(resp=>{
                deletePotluck(id);
                // setPotlucks(resp.data);
            })
            .catch(err=> {
                console.log(err.response)
            });
    }

    // useEffect(()=> {
    //     handleDelete()
    // }, [])


    const handleEdit = (potluck) => {
        axiosWithAuth()
            .put(`/potlucks/${editId}`, potluck)
            .then((resp)=>{
                setPotlucks(resp.data)
                setEditing(!editing);
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const handleEditSelect = (id)=> {
        setEditing(true);
        setEditId(id);
    }

    const handleEditCancel = ()=>{
        setEditing(false);
    }

    const handleAdd = () => {
        push("/add");
      };



    return (
        <div>
            <div>
                <button onClick={handleAdd}>
                    Create a Potluck Event.
                </button>
                <h3>Upcoming Potlucks</h3>
                {
                    potlucks.map(potluck=> {
                        return(<div key={potluck.potluck_id}>
                            <Event potluck={potluck} handleDelete={handleDelete} handleEdit={handleEditSelect}/>
                        </div>)
                    })
                }
            </div>
            <div>
            {
                editing && <EditEvent editId={editId} handleEdit={handleEdit}  handleEditCancel={handleEditCancel}/>
            }
            </div>
        </div>
    )
}
