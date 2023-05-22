// import mongoose module
const mongoose =require ("mongoose");
const playerSchema = mongoose.Schema({
    name: String,
    position: String,
    number: Number,
    age:Number,
});
// Model Name (collection "matches" will be created/generated)
const player = mongoose.model("player",playerSchema);
// Make file exportable
module.exports = player;