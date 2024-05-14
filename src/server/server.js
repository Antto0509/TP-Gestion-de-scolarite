// Création du serveur
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Connexion à la base de données MongoDB
const mongoose = require('mongoose');
const uriCompass = "mongodb://127.0.0.1:27017/mon-universiteDB";
mongoose.connect(uriCompass)
  .then(() => console.log("Connexion à la base de données réussie"))
  .catch(err => console.error(err));

// Création des schémas Mongoose
const Schema = mongoose.Schema;

const EtudSchema = new Schema({
  NumEtudiant: { type: String, required: true },
  Nom: { type: String, required: true },
  Prenom: { type: String, required: true },
  DatenET: { type: String, required: true },
}, { versionKey: false });

const EnsSchema = new Schema({
  CodeEns: { type: Number, required: true },
  NomEns: { type: String, required: true },
  PrenomEns: { type: String, required: true },
  GradeEns: { type: String, required: true },
  CodeMat: { type: Number, required: true },
}, { versionKey: false });

const MatSchema = new Schema({
  CodeMat: { type: Number, required: true },
  LibelleMat: { type: String, required: true },
  CoefMat: { type: Number, required: true },
}, { versionKey: false });

const NoteSchema = new Schema({
  NumEtudiant: { type: String, required: true },
  CodeMat: { type: Number, required: true },
  Note: { type: Number, required: true },
  Date: { type: Date, required: true },
}, { versionKey: false });

// Création des modèles Mongoose
const Etud = mongoose.model("Etudiants", EtudSchema);
const Ens = mongoose.model("Enseignants", EnsSchema);
const Mat = mongoose.model("Matieres", MatSchema);
const Note = mongoose.model("Notes", NoteSchema);

// Affichage des ressources
app.get("/etudiants", async (req, res) => {
  try {
    const results = await Etud.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "CastError":
        res.status(400).send("Erreur de format de données");
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});

app.get("/enseignants", async (req, res) => {
  try {
    const results = await Ens.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "CastError":
        res.status(400).send("Erreur de format de données");
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});

app.get("/matieres", async (req, res) => {
  try {
    const results = await Mat.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "CastError":
        res.status(400).send("Erreur de format de données");
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});

app.get("/notes", async (req, res) => {
  try {
    const results = await Note.find({});
    res.send(results);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "CastError":
        res.status(400).send("Erreur de format de données");
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});