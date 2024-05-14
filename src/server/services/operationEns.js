import axios from 'axios';

export const getAllEns = (callback)=>{
    axios.get('http://localhost:4000/enseignants').then((res)=> 
        callback(res))
}

export const addEns = (ens, callback)=>{
    axios.post('http://localhost:4000/enseignants',ens).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

export const removeEns = (id, callback)=>{
    axios.delete(`http://localhost:4000/enseignants/${id}`) .then((res)=> 
        callback(res)).catch((err)=> 
            callback(err));
}