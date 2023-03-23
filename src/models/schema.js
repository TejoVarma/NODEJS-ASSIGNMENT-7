const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    _id: { 
        type: Number, 
        unique: true
    },
    name: { 
        type: String,
        required : true
    },
    currentClass: { 
        type: Number, 
        required : true
    },
    division: {
    type: String,
    uppercase: true,
    required : true
  },
});

const Student = mongoose.model('Students', studentSchema);

module.exports = Student;
