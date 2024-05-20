import React, { useEffect, useState } from "react";
import Modal from './navigation/modal';
import { getMatieres } from "../server/client/components/lstMat";

export default function Matieres() {
    const [matieres, setMatieres] = useState([]);

    useEffect(() => {
        getMatieres((data) => setMatieres(data));
    }, []);
    
    return (
        <div className="container">
            <h1>Liste des matières</h1>
            <Modal type="add" table="matieres" />
            <table>
                <tbody>
                <tr>
                    <th>Code matière</th>
                    <th>Libellé</th>
                    <th>Coefficient</th>
                    <th>Actions</th>
                </tr>
                {matieres.map((matiere) => (
                <tr key={matiere.CodeMat}>
                    <td>{matiere.CodeMat}</td>
                    <td>{matiere.LibelleMat}</td>
                    <td>{matiere.CoefMat}</td>
                    <td>
                        <Modal type="update" table="matieres" data={matiere} />
                        <Modal type="delete" table="matieres" data={matiere} />
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}