const express = require('express')
const app = express()
const port = 4000
app.get('/', (req, res) => { res.send('Hello server ...');
});
app.listen(port, () => {
console.log(`Server is running on port ${port}`) })

// Connexion à la base de données
const mongoose = require('mongoose');
const uriCompass = "mongodb://127.0.0.1:27017/mon-universiteDB"
mongoose.connect(uriCompass).then(()=> console.log("successful connexion DB"));

// Création du schéma
const Schema = mongoose.Schema; let EtudSchema = new Schema({
    code: Number,
    nom: String, }, 
    { versionKey: false }
);

// Création du modèle
let Etud = mongoose.model("Etudiants ", EtudSchema);

// Affichage de tous les étudiants
app.get("/Etudiants", (req, res) => {
    Etud.find({}, (err, results) => {
        if (!err) { res.send(results);}
    });
});