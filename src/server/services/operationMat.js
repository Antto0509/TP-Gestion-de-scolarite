import axios from 'axios';

export const getAllMat = (callback)=>{
    axios.get('http://localhost:4000/matieres').then((res)=> 
        callback(res))
}

export const addMat = (mat, callback)=>{
    axios.post('http://localhost:4000/matieres',mat).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

export const removeMat = (id, callback)=>{
    axios.delete(`http://localhost:4000/matieres/${id}`) .then((res)=> 
        callback(res)).catch((err)=> 
            callback(err));
}