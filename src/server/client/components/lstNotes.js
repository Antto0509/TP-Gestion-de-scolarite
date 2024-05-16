import { getAllNotes, addNote, updateNote, removeNote } from "../../services/operationNotes";

export const getNotes = (callback) => {
    getAllNotes((res) => {
        callback(res.data);
    });
}

export const componentDidMount = () => {
    getNotes((notes) => {
        this.setState({ notes });
    });
}

export const addNote_ = (numEtud, codeMat, note, date, callback) => {
    let newNote = {
        NumEtudiant: numEtud,
        CodeMat: codeMat,
        Note: note,
        Date: date,
    };
    addNote(newNote, callback);
}

export const updateNote_ = (numEtud, codeMat, note, date, callback) => {
    let newNote = {
        NumEtudiant: numEtud,
        CodeMat: codeMat,
        Note: note,
        Date: date,
    };
    updateNote(newNote, callback);
}

export const removeNote_ = (idEtud, idMat, callback) => {
    removeNote(idEtud, idMat, callback);
}