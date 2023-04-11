const mongoose = require('mongoose');

const teamsSchema = mongoose.Schema({
    id : { type : String, required : true },
    name : { type : String, required : true },
    icon : { type : String, required : true },
    competitions : [],
    players : [],
    staffs : [],
    results : []
});

module.exports = mongoose.model('Teams', teamsSchema);