import React, { useState, useEffect } from 'react';
import ModalUpdate from './navigation/modalUpdate';
import { getEtudiants } from '../server/client/components/lstEtuds';

function Etudiants() {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    getEtudiants((data) => setEtudiants(data));
  }, []);
  
  return (
    <div>
        <h1>Liste des étudiants</h1>
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
                    <ModalUpdate type="etudiants" data={etudiant} />
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

export default Etudiants;
