import React, { useEffect, useState } from "react";
import { getAllEns, addEns, removeEns } from "../server/services/operationEns";

function Enseignants() {
    const [enseignants, setEnseignants] = useState([]); // État pour stocker les données des enseignants

    useEffect(() => {
        getEnseignants(); // Récupérer les données au montage du composant
    }, []);

    const getEnseignants = () => {
        getAllEns((res) => { // Fonction pour récupérer les données des enseignants
            setEnseignants(res.data); // Mettre à jour l'état avec les données
        });
    };

    const add = (num, nom, prenom, date) => {
        // Fonction pour ajouter un nouvel enseignant (non implémentée)
        let newEnseignant = {
            NumEnseignant: num,
            NomEnseignant: nom,
            PrenomEnseignant: prenom,
            DateNaissance: date,
        };
        addEns(newEnseignant, () => {
            getEnseignants(); // Rafraichir la liste après l'ajout
        });
    };

    const remove = (id, callback) => {
        // Fonction pour supprimer un enseignant (non implémentée)
        removeEns(id, callback);
    };

    return (
        <div>
            <h1>Liste des enseignants</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Code enseignant</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Date de naissance</th>
                        <th>Code matière</th>
                        <th>Actions</th>
                    </tr>
                    {enseignants.map((enseignant) => (
                        <tr key={enseignant._id}>
                            <td>{enseignant.CodeEns}</td>
                            <td>{enseignant.NomEns}</td>
                            <td>{enseignant.PrenomEns}</td>
                            <td>{enseignant.GradeEns}</td>
                            <td>{enseignant.CodeMat}</td>
                            <td>
                                <button>Modifier</button>
                                <button onClick={() => remove(enseignant._id, getEnseignants)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => add('...', '...', '...', '...')}>Ajouter</button>
        </div>
    );
}

export default Enseignants;