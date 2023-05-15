const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name : { type : String , required : true },
    type : { type : String , required : true },
    role : { type : String , required : false },
    icon : { type : String , required : true }
});

const resultSchema = mongoose.Schema({
    type : { type : String, required : true },
    competition : { type : String , required : true },
    team_left_name : { type : String , required : false },
    team_left_icon : { type : String , required : false },
    team_left_score : { type : String , required : false },
    team_right_name : { type : String , required : false },
    team_right_icon : { type : String , required : false },
    team_right_score : { type : String , required : false },
    format : { type : String , required : false },
    date : { type : String , required : false }
});

const upcomingSchema = mongoose.Schema({
    type : { type : String , required : true },
    competition : { type : String , required : true },
    team_left_name : { type : String , required : false },
    team_left_icon : { type : String , required : false },
    team_right_name : { type : String , required : false },
    team_right_icon : { type : String , required : false },
    format : { type : String , required : false },
    date : { type : String, required : false },
})

const teamSchema = mongoose.Schema({
    link : { type : String , required : true },
    name : { type : String , required : true },
    icon : { type : String , required : true },
    players : [playerSchema],
    results : [resultSchema],
    upcomings : [upcomingSchema],
});

module.exports = mongoose.model('Team', teamSchema);