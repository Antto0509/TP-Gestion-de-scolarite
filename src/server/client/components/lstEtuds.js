import { getAllEtuds, addEtud, updateEtud, removeEtud } from '../../services/operationEtuds';

export const getEtudiants = (callback) => {
    getAllEtuds((res) => {
        callback(res.data);
    });
};

export const componentDidMount = () => {
    getEtudiants((etudiants) => {
        this.setState({ etudiants });
    });
};

export const addEtudiant = (num, nom, prenom, date, callback) => {
    let newEtud = {
        NumEtudiant: num,
        Nom: nom,
        Prenom: prenom,
        DatenET: date,
    };
    addEtud(newEtud, callback);
}

export const updateEtudiant = (num, nom, prenom, date, callback) => {
    let newEtud = {
        NumEtudiant: num,
        Nom: nom,
        Prenom: prenom,
        DatenET: date,
    };
    updateEtud(newEtud, callback);
}

export const removeEtudiant = (id, callback) => {
    removeEtud(id, callback);
};