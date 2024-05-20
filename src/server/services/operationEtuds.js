import axios from 'axios';

// Fonction qui permet de récupérer tous les étudiants
export const getAllEtuds = (callback)=>{ 
    axios.get('http://localhost:4000/etudiants').then((res)=> 
        callback(res)).catch((err)=>
            callback(err));
}

// Fonction qui permet d'ajouter un étudiant
export const addEtud = (etud, callback)=>{
    axios.post('http://localhost:4000/etudiants',etud).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de modifier un étudiant
export const updateEtud = (etud, callback)=>{
    axios.put(`http://localhost:4000/etudiants?NumEtudiant=${etud.NumEtudiant}`, etud).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de supprimer un étudiant
export const removeEtud = (id, callback)=>{
    axios.delete(`http://localhost:4000/etudiants?NumEtudiant=${id}`).then((res) =>
        callback(res)).catch((err)=> 
            callback(err));
}