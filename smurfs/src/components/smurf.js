import { connect } from 'react-redux'
import { getSmurf } from '../actions/action'

const smurfList = props =>{
    const fetchSmurf = e =>{
        e.preventDefault();
        props.getSmurf();
    }
    console.log(props.smurf);
    return(
        <div className='List'>
            <h2>List of Smurfs</h2>
            {props.smurf.map(smu=>(
                <div className='smurfs' key={new Date()}>
                <h4>{smur.name}</h4>
                <p>Height: {smur.height}</p>
                <p>Age: {smur.age}</p>
            </div>
            ))}
            {props.error && <p className="error">{props.error}</p>}
            <button className='fetch-button' onClick={fetchSmurf}>Get Smurf</button>
        </div>
    )
}

const mapState = state =>({
    smurf: state.smurf,
    error: state.error
})

export default connect(mapState, {getSmurf})(smurfList);