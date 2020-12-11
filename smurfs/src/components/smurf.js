import React from 'react';
import { connect } from 'react-redux'
import { getSmurf } from '../actions/action'

const SmurfList = props =>{
    const fetchSmurf = e =>{
        e.preventDefault();
        props.getSmurf();
    }

    
    return( 
        <div className='List'>
            <h2>List of Smurfs</h2>
            {props.smurfs.map(smurf=>{
                return (
                <div className='smurfs' key={smurf.id}>
                <h4>{smurf.name}</h4>
                <p>Height: {smurf.height}</p>
                <p>Age: {smurf.age}</p>
                </div>
                )
            }
                
            )}
            {props.error && <p className="error">{props.error}</p>}
            <button className='fetch-button' onClick={fetchSmurf}>Get Smurf</button>
        </div>
    )
}

const mapState = state =>({
    smurfs: state.smurf,
    error: state.error
})

export default connect(mapState, {getSmurf})(SmurfList);