const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { initStreamers, getLiveStreamers } = require('./utils/TwitchUtils');
const streamerRoutes = require('./routes/streamer');
const teamsRoutes = require('./routes/teams');
const playersRoutes = require('./routes/players');
const resultsRoutes = require('./routes/results');

mongoose.connect('mongodb+srv://Solymnos:1ncubus0Wmongodb@sly-api-db.rdzdzn5.mongodb.net/test', {
    useNewUrlParser : true,
    useUnifiedTopology : true})
    .then(async () => {
        console.log('Connexion à MongoDB réussie!');
        initStreamers();
        getLiveStreamers();
        setInterval(function() {
            getLiveStreamers();
        }, 30 * 1000);
    })
    .catch(() => console.log('Echec de la connexion à MongoDB'));

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/streamer', streamerRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/players', playersRoutes);
app.use('/api/results', resultsRoutes);

module.exports = app;