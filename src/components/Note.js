import React, { useEffect, useState } from "react";
import { getAllNotes, addNote, removeNote } from "../server/services/operationNotes";

export default function Notes() {
    const [notes, setNotes] = useState([]); // État pour stocker les données des notes
    
    useEffect(() => {
        getNotes(); // Récupérer les données au montage du composant
    }, []);
    
    const getNotes = () => {
        getAllNotes((res) => { // Fonction pour récupérer les données des notes
        setNotes(res.data); // Mettre à jour l'état avec les données
        });
    };
    
    const add = (num, code, note, date) => {
        // Fonction pour ajouter une nouvelle note (non implémentée)
        let newNote = {
        NumEtudiant: num,
        CodeMat: code,
        Note: note,
        Date: date,
        };
        addNote(newNote, () => {
        getNotes(); // Rafraichir la liste après l'ajout
        });
    };
    
    const remove = (id, callback) => {
        // Fonction pour supprimer une note (non implémentée)
        removeNote(id, callback);
    };
    
    return (
        <div>
            <h1>Liste des notes</h1>
            <table>
                <tbody>
                <tr>
                    <th>Numéro étudiant</th>
                    <th>Code matière</th>
                    <th>Note</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                {notes.map((note) => (
                <tr key={note._id}>
                    <td>{note.NumEtudiant}</td>
                    <td>{note.CodeMat}</td>
                    <td>{note.Note}</td>
                    <td>{note.Date}</td>
                    <td>
                        <button>Modifier</button>
                        <button onClick={() => remove(note._id, getNotes)}>
                            Supprimer
                        </button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}