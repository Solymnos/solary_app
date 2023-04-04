const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/things');

mongoose.connect('mongodb+srv://Solymnos:1ncubus0Wmongodb@sly-api-db.rdzdzn5.mongodb.net/test', {
    useNewUrlParser : true,
    useUnifiedTopology : true})
    .then(() => console.log('Connexion à MongoDB réussie!'))
    .catch(() => console.log('Echec de la connexion à MongoDB'));


const app = express();

app.use(express.json());

app.get((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/stuff', (req, res, next) => {
    Thing.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff/:id', (req, res, next) => {
    console.log('case with id = ' + req.params.id);
    Thing.findOne({ _id : req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
})

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message : 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id : req.params.id },  {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message : 'Object modifié' }))
        .catch(error => res.status(400).json({ error }));
});

app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message : 'Objet supprimé ! '}))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;