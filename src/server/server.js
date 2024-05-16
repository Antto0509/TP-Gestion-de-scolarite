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
  _id: { type: String, required: true },
  NumEtudiant: { type: String, required: true },
  Nom: { type: String, required: true },
  Prenom: { type: String, required: true },
  DatenET: { type: String, required: true },
}, { versionKey: false });

const EnsSchema = new Schema({
  _id: { type: String, required: true },
  CodeEns: { type: Number, required: true },
  NomEns: { type: String, required: true },
  PrenomEns: { type: String, required: true },
  GradeEns: { type: String, required: true },
  CodeMat: { type: Number, required: true },
}, { versionKey: false });

const MatSchema = new Schema({
  _id: { type: String, required: true },
  CodeMat: { type: Number, required: true },
  LibelleMat: { type: String, required: true },
  CoefMat: { type: Number, required: true },
}, { versionKey: false });

const NoteSchema = new Schema({
  _id: { type: String, required: true },
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
    const { NumEtudiant } = req.query;
    if (NumEtudiant) {
      const result = await Etud.findOne({ NumEtudiant });
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("Etudiant non trouvé");
      }
    } else {
      const results = await Etud.find({});
      res.send(results);
    }
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

app.get("/etudiants/:NumEtudiant", async (req, res) => {
  try {
    const { NumEtudiant } = req.params;
    const result = await Etud.findOne({ NumEtudiant });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Etudiant non trouvé");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur interne du serveur");
  }
});

app.get("/enseignants", async (req, res) => {
  try {
    const { CodeEns } = req.query;
    if (CodeEns) {
      const result = await Ens.findOne({ CodeEns });
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("Enseignant non trouvé");
      }
    } else {
      const results = await Ens.find({});
      res.send(results);
    }
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

app.get("/enseignants/:CodeEns", async (req, res) => {
  try {
    const { CodeEns } = req.params;
    const result = await Ens.findOne({ CodeEns });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Enseignant non trouvé");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur interne du serveur");
  }
});

app.get("/matieres", async (req, res) => {
  try {
    const { CodeMat } = req.query;
    if (CodeMat) {
      const result = await Mat.findOne({ CodeMat });
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("Matière non trouvée");
      }
    } else {
      const results = await Mat.find({});
      res.send(results);
    }
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

app.get("/matieres/:CodeMat", async (req, res) => {
  try {
    const { CodeMat } = req.params;
    const result = await Mat.findOne({ CodeMat });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Matière non trouvée");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur interne du serveur");
  }
});

app.get("/notes", async (req, res) => {
  try {
    const { NumEtudiant, CodeMat } = req.query;
    if (NumEtudiant && CodeMat) {
      const result = await Note.findOne({ NumEtudiant, CodeMat });
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("Note non trouvée");
      }
    } else {
      const results = await Note.find({});
      res.send(results);
    }
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

app.get("/notes/:NumEtudiant/:CodeMat", async (req, res) => {
  try {
    const { NumEtudiant, CodeMat } = req.params;
    const result = await Note.findOne({ NumEtudiant, CodeMat });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Note non trouvée");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur interne du serveur");
  }
});

// Ajout des ressources
app.post("/etudiants", async (req, res) => {
  try {
    const newEtud = new Etud(req.body);
    const result = await newEtud.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "ValidationError":
        res.status(400).send(err.message);
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});

app.post("/enseignants", async (req, res) => {
  try {
    const newEns = new Ens(req.body);
    const result = await newEns.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "ValidationError":
        res.status(400).send(err.message);
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});

app.post("/matieres", async (req, res) => {
  try {
    const newMat = new Mat(req.body);
    const result = await newMat.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "ValidationError":
        res.status(400).send(err.message);
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});

app.post("/notes", async (req, res) => {
  try {
    const newNote = new Note(req.body);
    const result = await newNote.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    switch (err.name) {
      case "ValidationError":
        res.status(400).send(err.message);
        break;
      default:
        res.status(500).send("Erreur interne du serveur");
    }
  }
});

// Modification des ressources
app.put("/etudiants", async (req, res) => {
  try {
    const { NumEtudiant } = req.query;
    const result = await Etud.findOneAndUpdate({ NumEtudiant }, req.body, { new: true });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Etudiant non trouvé");
    }
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

app.put("/enseignants", async (req, res) => {
  try {
    const { CodeEns } = req.query;
    const result = await Ens.findOneAndUpdate({ CodeEns }, req.body, { new: true });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Enseignant non trouvé");
    }
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

app.put("/matieres", async (req, res) => {
  try {
    const { CodeMat } = req.query;
    const result = await Mat.findOneAndUpdate({ CodeMat }, req.body, { new: true });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Matière non trouvée");
    }
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

app.put("/notes", async (req, res) => {
  try {
    const { NumEtudiant, CodeMat } = req.query;
    const result = await Note.findOneAndUpdate({ NumEtudiant, CodeMat }, req.body, { new: true });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Note non trouvée");
    }
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

// Suppression des ressources
app.delete("/etudiants", async (req, res) => {
  try {
    const { NumEtudiant } = req.query;
    const result = await Etud.findOneAndDelete({ NumEtudiant });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Etudiant non trouvé");
    }
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

app.delete("/enseignants", async (req, res) => {
  try {
    const { CodeEns } = req.query;
    const result = await Ens.findOneAndDelete({ CodeEns });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Enseignant non trouvé");
    }
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

app.delete("/matieres", async (req, res) => {
  try {
    const { CodeMat } = req.query;
    const result = await Mat.findOneAndDelete({ CodeMat });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Matière non trouvée");
    }
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

app.delete("/notes", async (req, res) => {
  try {
    const { NumEtudiant, CodeMat } = req.query;
    const result = await Note.findOneAndDelete({ NumEtudiant, CodeMat });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send("Note non trouvée");
    }
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