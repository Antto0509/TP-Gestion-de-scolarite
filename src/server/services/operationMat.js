import axios from 'axios';

// Fonction qui permet de récupérer toutes les matières
export const getAllMat = (callback)=>{
    axios.get('http://localhost:4000/matieres').then((res)=> 
        callback(res))
}

// Fonction qui permet d'ajouter une matière
export const addMat = (mat, callback)=>{
    axios.post('http://localhost:4000/matieres',mat).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de modifier une matière
export const updateMat = (mat, callback)=>{
    axios.put(`http://localhost:4000/matieres?CodeMat=${mat.CodeMat}`, mat).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de supprimer une matière
export const removeMat = (id, callback)=>{
    axios.delete(`http://localhost:4000/matieres?CodeMat=${id}`).then((res) =>
        callback(res)).catch((err)=> 
            callback(err));
}