// import mongoose module
const mongoose =require ("mongoose");
const teamSchema = mongoose.Schema({
    name: String,
    owner: String,
    foundation:String,
    stadium:Number,
    
});
// Model Name (collection "matches" will be created/generated)
const team = mongoose.model("team",teamSchema);
// Make file exportable
module.exports = team;