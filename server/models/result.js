const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
    id : { type : String, required : true },
    type : { type : String, required : true },
    team_left_name : { type : String, required : false },
    team_left_icon : { type : String, required : false },
    team_left_score : { type : String, required : false },
    team_right_name : { type : String, required : false },
    team_right_icon : { type : String, required : false },
    team_right_score : { type : String, required : false },
    competition : { type : String, required : false },
    game : { type : String, required : true },
    game_icon : { type : String, required : false },
    classement : { type : String, required : false },
    slywin : { type : Boolean, required : false },
})

module.exports = mongoose.model('Result', resultSchema);