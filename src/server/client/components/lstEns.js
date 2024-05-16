import { getAllEns, addEns, updateEns, removeEns } from "../../services/operationEns";

export const getEnseignants = (callback) => {
    getAllEns((res) => {
        callback(res.data);
    });
}

export const componentDidMount = () => {
    getEnseignants((enseignants) => {
        this.setState({ enseignants });
    });
}

export const addEnseignant = (code, nom, prenom, date, callback) => {
    let newEns = {
        CodeEns: code,
        Nom: nom,
        Prenom: prenom,
        DateNais: date,
    };
    addEns(newEns, callback);
}

export const updateEnseignant = (code, nom, prenom, date, callback) => {
    let newEns = {
        CodeEns: code,
        Nom: nom,
        Prenom: prenom,
        DateNais: date,
    };
    updateEns(newEns, callback);
}

export const removeEnseignant = (id, callback) => {
    removeEns(id, callback);
}