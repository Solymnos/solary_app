const mongoose = require('mongoose');

const progSchema = mongoose.Schema({
    id : { type : String, required : true },
    style : { type : String, required : true },
    date : { type : String, required : true },
    team_1_name : { type : String, required : false },
    team_1_icon : { type : String, required : false },
    team_2_name : { type : String, required : false },
    team_1_icon : { type : String, required : false },
    competition : { type : String, required : false },
    game : { type : String, required : false },
    game_icon : { type : String, required : false }, 
    players : [],
    tournament : { type : String, required : false },
    tournament_icon : { type : String, required : false },
});

module.exports = mongoose.model('Prog', progSchema);