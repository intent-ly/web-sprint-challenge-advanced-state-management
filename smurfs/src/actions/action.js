import axios from 'axios'

export const BEGIN = 'BEGIN';
export const GOOD = 'GOOD';
export const FAIL = 'FAIL';

export const POST_START = 'POST_START'
export const POST_PASS = 'POST_PASS'
export const POST_FAIL = 'POST_FAIL'



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


export const postSmurf = (smurfs) => dispatch =>{
    dispatch({type:POST_START})
    axios.post('http://localhost:3333/smurfs', smurfs)
        .then(res=>{
            dispatch({
                type: POST_PASS,
                payload: res.data
            })           
        })
        .catch(err =>{
            dispatch({
                type: POST_FAIL,
                payload: `ERROR: ${err.response}`
            })
        })
}