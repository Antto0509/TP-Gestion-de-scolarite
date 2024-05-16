import React, { useEffect, useState } from "react";
import ModalUpdate from './navigation/modalUpdate';
import { getEnseignants } from "../server/client/components/lstEns";

function Enseignants() {
    const [enseignants, setEnseignants] = useState([]);

    useEffect(() => {
        getEnseignants((data) => setEnseignants(data));
    }, []);

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
                                <ModalUpdate type="enseignants" data={enseignant} />
                                <button>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Ajouter</button>
        </div>
    );
}

export default Enseignants;