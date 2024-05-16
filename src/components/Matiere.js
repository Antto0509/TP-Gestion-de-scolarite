import React, { useEffect, useState } from "react";
import ModalUpdate from './navigation/modalUpdate';
import { getMatieres } from "../server/client/components/lstMat";

export default function Matieres() {
    const [matieres, setMatieres] = useState([]);

    useEffect(() => {
        getMatieres((data) => setMatieres(data));
    }, []);
    
    return (
        <div>
            <h1>Liste des matières</h1>
            <table>
                <tbody>
                <tr>
                    <th>Code matière</th>
                    <th>Libellé</th>
                    <th>Coefficient</th>
                    <th>Actions</th>
                </tr>
                {matieres.map((matiere) => (
                <tr key={matiere._id}>
                    <td>{matiere.CodeMat}</td>
                    <td>{matiere.LibelleMat}</td>
                    <td>{matiere.CoefMat}</td>
                    <td>
                        <ModalUpdate type="matieres" data={matiere} />
                        <button>
                            Supprimer
                        </button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            <button>Ajouter une matière</button>
        </div>
    );
}