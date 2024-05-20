import axios from 'axios';

// Fonction qui permet de récupérer tous les enseignants
export const getAllEns = (callback)=>{
    axios.get('http://localhost:4000/enseignants').then((res)=> 
        callback(res)).catch((err)=>
            callback(err));
}

// Fonction qui permet d'ajouter un enseignant
export const addEns = (ens, callback)=>{
    axios.post('http://localhost:4000/enseignants',ens).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de modifier un enseignant
export const updateEns = (ens, callback)=>{
    axios.put(`http://localhost:4000/enseignants?CodeEns=${ens.CodeEns}`, ens).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de supprimer un enseignant
export const removeEns = (id, callback)=>{
    axios.delete(`http://localhost:4000/enseignants?CodeEns=${id}`).then((res) =>
        callback(res)).catch((err)=> 
            callback(err));
}