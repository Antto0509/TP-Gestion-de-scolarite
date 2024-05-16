import React, { useState } from 'react';
import { updateEtudiant } from '../../server/client/components/lstEtuds';
import { updateEnseignant } from '../../server/client/components/lstEns';
import { updateMatiere } from '../../server/client/components/lstMat';
import { updateNote_ } from '../../server/client/components/lstNotes';

function ModalUpdate({ data, type }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button onClick={openModal}>Modifier</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>

            {type === 'etudiants' && (
              <>
                <h2>Informations sur l'étudiant</h2>
                <label htmlFor="numEtudiant">Numéro étudiant</label>
                <input type="text" id="numEtudiant" defaultValue={data.NumEtudiant} />
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" defaultValue={data.Nom} />
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" defaultValue={data.Prenom} />
                <label htmlFor="date">Date de naissance</label>
                <input type="text" id="date" defaultValue={data.DatenET} />
                <button onClick={() => updateEtudiant(document.getElementById('numEtudiant').value, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('date').value, closeModal)}>Enregistrer</button>
              </>
            )}

            {type === 'enseignants' && (
              <>
                <h2>Informations sur l'enseignant</h2>
                <label htmlFor="numEnseignant">Code enseignant</label>
                <input type="text" id="codeEnseignant" defaultValue={data.CodeEns} />
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" defaultValue={data.NomEns} />
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" defaultValue={data.PrenomEns} />
                <label htmlFor="grade">Grade</label>
                <input type="text" id="grade" defaultValue={data.GradeEns} />
                <label htmlFor="codeMat">Code matière</label>
                <input type="text" id="codeMat" defaultValue={data.CodeMat} />
                <button onClick={() => updateEnseignant(document.getElementById('codeEnseignant').value, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('grade').value, document.getElementById('codeMat').value, closeModal)}>Enregistrer</button>
              </>
            )}

            {type === 'matieres' && (
              <>
                <h2>Informations sur la matière</h2>
                <label htmlFor="codeMatiere">Code matière</label>
                <input type="text" id="codeMatiere" defaultValue={data.CodeMat} />
                <label htmlFor="libelle">Libellé</label>
                <input type="text" id="libelle" defaultValue={data.LibelleMat} />
                <label htmlFor="coef">Coefficient</label>
                <input type="text" id="coef" defaultValue={data.CoefMat} />
                <button onClick={() => updateMatiere(document.getElementById('codeMatiere').value, document.getElementById('libelle').value, document.getElementById('coef').value, closeModal)}>Enregistrer</button>
              </>
            )}

            {type === 'notes' && (
              <>
                <h2>Informations sur la note</h2>
                <label htmlFor="numEtudiant">Numéro étudiant</label>
                <input type="text" id="numEtudiant" defaultValue={data.NumEtudiant} />
                <label htmlFor="codeMatiere">Code matière</label>
                <input type="text" id="codeMatiere" defaultValue={data.CodeMat} />
                <label htmlFor="note">Note</label>
                <input type="text" id="note" defaultValue={data.Note} />
                <label htmlFor="date">Date</label>
                <input type="text" id="date" defaultValue={data.Date} />
                <button onClick={() => updateNote_(document.getElementById('numEtudiant').value, document.getElementById('codeMatiere').value, document.getElementById('note').value, document.getElementById('date').value, closeModal)}>Enregistrer</button>
              </>
            )}

            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalUpdate;