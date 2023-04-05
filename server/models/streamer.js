const mongoose = require('mongoose');

const streamerSchema = mongoose.Schema({
    id : { type : String, required : true },
    login : { type : String, required : true },
    name : { type : String, required : true },
    isUp : { type : Boolean, required : true },
    iconUrl : { type : String, required : true },
    liveTitle : { type : String, required : false },
    liveGame : { type : String, required : false },
});

module.exports = mongoose.model('Streamer', streamerSchema);