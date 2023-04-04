const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

mongoose.connect('mongodb+srv://Solymnos:1ncubus0Wmongodb@sly-api-db.rdzdzn5.mongodb.net/test', {
    useNewUrlParser : true,
    useUnifiedTopology : true})
    .then(() => console.log('Connexion à MongoDB réussie!'))
    .catch(() => console.log('Echec de la connexion à MongoDB'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);

module.exports = app;