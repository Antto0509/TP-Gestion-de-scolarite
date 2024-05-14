import React, { useEffect, useState } from "react";
import { getAllMat, addMat, removeMat } from "../server/services/operationMat";

export default function Matieres() {
    const [matieres, setMatieres] = useState([]); // État pour stocker les données des matières
    
    useEffect(() => {
        getMatieres(); // Récupérer les données au montage du composant
    }, []);
    
    const getMatieres = () => {
        getAllMat((res) => { // Fonction pour récupérer les données des matières
        setMatieres(res.data); // Mettre à jour l'état avec les données
        });
    };
    
    const add = (nom, coef) => {
        // Fonction pour ajouter une nouvelle matière (non implémentée)
        let newMat = {
        NomMatiere: nom,
        CoefMatiere: coef,
        };
        addMat(newMat, () => {
        getMatieres(); // Rafraichir la liste après l'ajout
        });
    };
    
    const remove = (id, callback) => {
        // Fonction pour supprimer une matière (non implémentée)
        removeMat(id, callback);
    };
    
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
                        <button>Modifier</button>
                        <button onClick={() => remove(matiere._id, getMatieres)}>
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