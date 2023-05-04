const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    id : { type : String, required : true },
    type : { type : String, required : true },
    date : { type : String, required : true },
    team_left_name : { type : String, required : false },
    team_left_icon : { type : String, required : false },
    team_right_name : { type : String, required : false },
    team_right_icon : { type : String, required : false },
    competition : { type : String, required : false },
    game : { type : String, required : true },
    game_icon : { type : String, required : false }, 
    players : [],
    format : { type : String, required : false }
});

module.exports = mongoose.model('Match', matchSchema);