import { getAllMat, addMat, updateMat, removeMat } from "../../services/operationMat";

export const getMatieres = (callback) => {
    getAllMat((res) => {
        callback(res.data);
    });
}

export const componentDidMount = () => {
    getMatieres((matieres) => {
        this.setState({ matieres });
    });
}

export const addMatiere = (code, nom, coef, callback) => {
    let newMat = {
        CodeMat: code,
        LibelleMat: nom,
        CoefMat: coef,
    };
    addMat(newMat, callback);
}

export const updateMatiere = (code, nom, coef, callback) => {
    let newMat = {
        CodeMat: code,
        LibelleMat: nom,
        CoefMat: coef,
    };
    updateMat(newMat, callback);
}

export const removeMatiere = (id, callback) => {
    removeMat(id, callback);
}