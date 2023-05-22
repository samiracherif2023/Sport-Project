// import mongoose module
const mongoose =require ("mongoose");
const stadiumSchema = mongoose.Schema({
    name: String,
    capacity: Number,
    city:String,
   
});
// Model Name (collection "matches" will be created/generated)
const stadium = mongoose.model("stadium",stadiumSchema);
// Make file exportable
module.exports = stadium;