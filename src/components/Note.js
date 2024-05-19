import React, { useEffect, useState } from "react";
import Modal from './navigation/modal';
import { getNotes } from "../server/client/components/lstNotes";

export default function Notes() {
    const [notes, setNotes] = useState([]); // État pour stocker les données des notes
    
    useEffect(() => {
        getNotes((data) => setNotes(data));
    }, []);
    
    return (
        <div>
            <h1>Liste des notes</h1>
            <Modal type="add" table="notes" />
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
                        <Modal type="update" table="notes" data={note} />
                        <Modal type="delete" table="notes" data={note} />
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}