import axios from 'axios';

// Fonction qui permet de récupérer toutes les notes
export const getAllNotes = (callback)=>{
    axios.get('http://localhost:4000/notes').then((res)=> 
        callback(res))
}

// Fonction qui permet d'ajouter une note   
export const addNote = (note, callback)=>{
    axios.post('http://localhost:4000/notes',note).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de modifier une note
export const updateNote = (note, callback)=>{
    axios.put('http://localhost:4000/notes', note).then((res) => 
        callback(res)).catch((err)=> 
            callback(err));
}

// Fonction qui permet de supprimer une note
export const removeNote = (idEtud, idMat, callback)=>{
    axios.delete(`http://localhost:4000/notes?NumEtudiant=${idEtud}&CodeMat=${idMat}`).then((res) =>
        callback(res)).catch((err)=> 
            callback(err));
}