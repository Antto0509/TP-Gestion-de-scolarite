import React, { useState, useEffect } from 'react';
import Modal from './navigation/modal';
import { getEtudiants } from '../server/client/components/lstEtuds';

function Etudiants() {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    getEtudiants((data) => setEtudiants(data));
  }, []);
  
  return (
    <div>
        <h1>Liste des étudiants</h1>
        <Modal type="add" table="etudiants" />
        <table>
            <tbody>
            <tr>
                <th>NumEtudiant</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>DatenET</th>
                <th>Actions</th>
            </tr>
            {etudiants.map((etudiant) => (
            <tr key={etudiant._id}>
                <td>{etudiant.NumEtudiant}</td>
                <td>{etudiant.Nom}</td>
                <td>{etudiant.Prenom}</td>
                <td>{etudiant.DatenET}</td>
                <td>
                    <Modal type="update" table="etudiants" data={etudiant} />
                    <Modal type="delete" table="etudiants" data={etudiant} />
                </td>
              </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default Etudiants;
