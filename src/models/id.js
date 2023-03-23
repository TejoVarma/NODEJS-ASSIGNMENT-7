const mongoose = require("mongoose");

let idSchema = mongoose.Schema({
    _id: String,
    currId : Number
})

const id = mongoose.model("Ids", idSchema);
module.exports = id;
