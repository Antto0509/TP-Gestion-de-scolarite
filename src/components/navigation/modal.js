import React, { useState } from 'react';
import { addEtudiant, updateEtudiant, removeEtudiant } from '../../server/client/components/lstEtuds';
import { addEnseignant, updateEnseignant, removeEnseignant } from '../../server/client/components/lstEns';
import { addMatiere, updateMatiere, removeMatiere } from '../../server/client/components/lstMat';
import { addNote_, updateNote_, removeNote_ } from '../../server/client/components/lstNotes';

export default function Modal({ data, table, type }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
    {type === 'update' && (
      <button class="btn-modifier" onClick={openModal}>Modifier</button>
    )}

    {type === 'delete' && (
      <button class="btn-supprimer" onClick={openModal}>Supprimer</button>
    )}

    {type === 'add' && (
      <button class="btn-ajouter" onClick={openModal}>Ajouter</button>
    )}

    {showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={closeModal}>&times;</span>

          {table === 'etudiants' && type === "update" && (
            <>
              <h2>Informations sur l'étudiant</h2>
              <input type="hidden" id="numEtudiant" defaultValue={data.NumEtudiant} />
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" defaultValue={data.Nom} />
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" defaultValue={data.Prenom} />
              <label htmlFor="date">Date de naissance</label>
              <input type="text" id="date" defaultValue={data.DatenET} />
              <button class="btn-enregistrer" onClick={() => updateEtudiant(document.getElementById('numEtudiant').value, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('date').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'etudiants' && type === "add" && (
            <>
              <h2>Informations sur l'étudiant</h2>
              <label htmlFor="numEtudiant">Numéro étudiant</label>
              <input type="text" id="numEtudiant" />
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" />
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" />
              <label htmlFor="date">Date de naissance</label>
              <input type="text" id="date" />
              <button class="btn-enregistrer" onClick={() => addEtudiant(document.getElementById('numEtudiant').value, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('date').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'etudiants' && type === "delete" && (
            <>
              <h2>Supprimer l'étudiant</h2>
              <p>Êtes-vous sûr de vouloir supprimer cet étudiant ?</p>
              <button class="btn-supprimer" onClick={() => removeEtudiant(data.NumEtudiant, closeModal)}>Supprimer</button>
            </>
          )}

          {table === 'enseignants' && type === "update" && (
            <>
              <h2>Informations sur l'enseignant</h2>
              <input type="hidden" id="codeEnseignant" defaultValue={data.CodeEns} />
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" defaultValue={data.NomEns} />
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" defaultValue={data.PrenomEns} />
              <label htmlFor="grade">Grade</label>
              <input type="text" id="grade" defaultValue={data.GradeEns} />
              <label htmlFor="codeMat">Code matière</label>
              <input type="text" id="codeMat" defaultValue={data.CodeMat} />
              <button class="btn-enregistrer" onClick={() => updateEnseignant(document.getElementById('codeEnseignant').value, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('grade').value, document.getElementById('codeMat').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'enseignants' && type === "add" && (
            <>
              <h2>Informations sur l'enseignant</h2>
              <label htmlFor="numEnseignant">Code enseignant</label>
              <input type="text" id="codeEnseignant" />
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" />
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" />
              <label htmlFor="grade">Grade</label>
              <input type="text" id="grade" />
              <label htmlFor="codeMat">Code matière</label>
              <input type="text" id="codeMat" />
              <button class="btn-enregistrer" onClick={() => addEnseignant(document.getElementById('codeEnseignant').value, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('grade').value, document.getElementById('codeMat').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'enseignants' && type === "delete" && (
            <>
              <h2>Supprimer l'enseignant</h2>
              <p>Êtes-vous sûr de vouloir supprimer cet enseignant ?</p>
              <button class="btn-supprimer" onClick={() => removeEnseignant(data.CodeEns, closeModal)}>Supprimer</button>
            </>
          )}

          {table === 'matieres' && type === "update" && (
            <>
              <h2>Informations sur la matière</h2>
              <input type="hidden" id="codeMatiere" defaultValue={data.CodeMat} />
              <label htmlFor="libelle">Libellé</label>
              <input type="text" id="libelle" defaultValue={data.LibelleMat} />
              <label htmlFor="coef">Coefficient</label>
              <input type="text" id="coef" defaultValue={data.CoefMat} />
              <button class="btn-enregistrer" onClick={() => updateMatiere(document.getElementById('codeMatiere').value, document.getElementById('libelle').value, document.getElementById('coef').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'matieres' && type === "add" && (
            <>
              <h2>Informations sur la matière</h2>
              <label htmlFor="codeMatiere">Code matière</label>
              <input type="text" id="codeMatiere" />
              <label htmlFor="libelle">Libellé</label>
              <input type="text" id="libelle" />
              <label htmlFor="coef">Coefficient</label>
              <input type="text" id="coef" />
              <button class="btn-enregistrer" onClick={() => addMatiere(document.getElementById('codeMatiere').value, document.getElementById('libelle').value, document.getElementById('coef').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'matieres' && type === "delete" && (
            <>
              <h2>Supprimer la matière</h2>
              <p>Êtes-vous sûr de vouloir supprimer cette matière ?</p>
              <button class="btn-supprimer" onClick={() => removeMatiere(data.CodeMat, closeModal)}>Supprimer</button>
            </>
          )}

          {table === 'notes' && type === "update" && (
            <>
              <h2>Informations sur la note</h2>
              <input type="hidden" id="numEtudiant" defaultValue={data.NumEtudiant} />
              <input type="hidden" id="codeMatiere" defaultValue={data.CodeMat} />
              <label htmlFor="note">Note</label>
              <input type="text" id="note" defaultValue={data.Note} />
              <label htmlFor="date">Date</label>
              <input type="text" id="date" defaultValue={data.Date} />
              <button class="btn-enregistrer" onClick={() => updateNote_(document.getElementById('numEtudiant').value, document.getElementById('codeMatiere').value, document.getElementById('note').value, document.getElementById('date').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'notes' && type === "add" && (
            <>
              <h2>Informations sur la note</h2>
              <label htmlFor="numEtudiant">Numéro étudiant</label>
              <input type="text" id="numEtudiant" />
              <label htmlFor="codeMatiere">Code matière</label>
              <input type="text" id="codeMatiere" />
              <label htmlFor="note">Note</label>
              <input type="text" id="note" />
              <label htmlFor="date">Date</label>
              <input type="text" id="date" />
              <button class="btn-enregistrer" onClick={() => addNote_(document.getElementById('numEtudiant').value, document.getElementById('codeMatiere').value, document.getElementById('note').value, document.getElementById('date').value, closeModal)}>Enregistrer</button>
            </>
          )}

          {table === 'notes' && type === "delete" && (
            <>
              <h2>Supprimer la note</h2>
              <p>Êtes-vous sûr de vouloir supprimer cette note ?</p>
              <button class="btn-supprimer" onClick={() => removeNote_(data.NumEtudiant, data.CodeMat, closeModal)}>Supprimer</button>
            </>
          )}

          <button class="btn-fermer" onClick={closeModal}>Fermer</button>
        </div>
      </div>
    )}
    </>
  );
}