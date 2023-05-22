// import mongoose module
const mongoose =require ("mongoose");
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne:String,
    teamTwo:String,
});
// Model Name (collection "matches" will be created/generated)
const match = mongoose.model("match",matchSchema);
// Make file exportable
module.exports = match;