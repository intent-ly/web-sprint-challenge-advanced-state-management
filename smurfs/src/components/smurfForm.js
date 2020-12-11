import React, { useState } from 'react';
import axios from "axios";

export const SmurfForm = props => {
    const defaultState = {
        name: '',
        age: '',
        height: '',
    };

    const [formState, setFormState] = useState(defaultState);

    const formSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3333/smurfs', formState)
            .then( res =>{
                dispatchEvent({
                    payload: formState,
                })
            })
            .catch(err => console.log(err))
    };

    const inputChange = e => {
        console.log(e.target.type);
        const value = e.target.name ? e.target.text: e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value,

        });
    };

    return (
        <div className='container'>
            <form className='card' onSubmit={formSubmit}>
                <h1>Create a Smurf</h1>
                <div>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        autoComplete='off'
                        value={formState.name}
                        onChange={inputChange}/>                    
                </div>
                <div>
                    Age:
                    <input
                        type='text'
                        name='age'
                        value={formState.age}
                        onChange={inputChange}/>
                </div>
                <div>
                    Height:
                    <input
                        type='text'
                        name='height'
                        value={formState.height}
                        onChange={inputChange}/>
                </div>            
                <button className='submit-button' type="submit">Create</button>
            </form>
        </div>
    )
} 