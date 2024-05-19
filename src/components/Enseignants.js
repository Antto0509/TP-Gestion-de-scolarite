import React, { useEffect, useState } from "react";
import Modal from './navigation/modal';
import { getEnseignants } from "../server/client/components/lstEns";

function Enseignants() {
    const [enseignants, setEnseignants] = useState([]);

    useEffect(() => {
        getEnseignants((data) => setEnseignants(data));
    }, []);

    return (
        <div>
            <h1>Liste des enseignants</h1>
            <Modal type="add" table="enseignants" />
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
                        <tr key={enseignant.CodeEns}>
                            <td>{enseignant.CodeEns}</td>
                            <td>{enseignant.NomEns}</td>
                            <td>{enseignant.PrenomEns}</td>
                            <td>{enseignant.GradeEns}</td>
                            <td>{enseignant.CodeMat}</td>
                            <td>
                                <Modal type="update" table="enseignants" data={enseignant} />
                                <Modal type="delete" table="enseignants" data={enseignant} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Enseignants;