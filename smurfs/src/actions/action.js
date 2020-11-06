import axios from 'axios'

export const BEGIN = 'BEGIN';
export const GOOD = 'GOOD';
export const FAIL = 'FAIL';


export const getSmurf = () => dispatch =>{
    dispatch({type: BEGIN})
    axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log(res.data);
            dispatch({
                type: GOOD,
                payload: res.data
            });
        })
        .catch(err =>{
            dispatch({
                type: FAIL,
                payload: `ERROR: ${err.response}`
            });
        })
}
