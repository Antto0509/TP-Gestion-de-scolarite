import React, { useEffect, useState } from "react";
import ModalUpdate from './navigation/modalUpdate';
import { getNotes } from "../server/client/components/lstNotes";

export default function Notes() {
    const [notes, setNotes] = useState([]); // État pour stocker les données des notes
    
    useEffect(() => {
        getNotes((data) => setNotes(data));
    }, []);
    
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
                        <ModalUpdate type="notes" data={note} />
                        <button>
                            Supprimer
                        </button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            <button>Ajouter une note</button>
        </div>
    );
}