import React, { useState, useEffect } from 'react';
import { getAllEtuds, addEtud, removeEtud } from '../server/services/operationEtuds';

function Etudiants() {
  const [etudiants, setEtudiants] = useState([]); // État pour stocker les données des étudiants

  useEffect(() => {
    getEtudiants(); // Récupérer les données au montage du composant
  }, []);

  const getEtudiants = () => {
    getAllEtuds((res) => { // Fonction pour récupérer les données des étudiants
      setEtudiants(res.data); // Mettre à jour l'état avec les données
    });
  };

  const add = (num, nom, prenom, date) => {
    // Fonction pour ajouter un nouvel étudiant (non implémentée)
    let newEtud = {
      NumEtudiant: num,
      NomEtudiant: nom,
      PrenomEtudiant: prenom,
      DatenET: date,
    };
    addEtud(newEtud, () => {
      getEtudiants(); // Rafraichir la liste après l'ajout
    });
  };

  const remove = (id, callback) => {
    // Fonction pour supprimer un étudiant (non implémentée)
    removeEtud(id, callback);
  };

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
                    <button>Modifier</button>
                    <button onClick={() => remove(etudiant._id, getEtudiants)}>
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

export default Etudiants;
