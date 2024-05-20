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

export const addEnseignant = (code, nom, prenom, grade, mat, callback) => {
    let newEns = {
        CodeEns: code,
        NomEns: nom,
        PrenomEns: prenom,
        GradeEns: grade,
        CodeMat: mat,
    };
    addEns(newEns, callback);
}

export const updateEnseignant = (code, nom, prenom, grade, mat, callback) => {
    let newEns = {
        CodeEns: code,
        NomEns: nom,
        PrenomEns: prenom,
        GradeEns: grade,
        CodeMat: mat,
    };
    updateEns(newEns, callback);
}

export const removeEnseignant = (id, callback) => {
    removeEns(id, callback);
}