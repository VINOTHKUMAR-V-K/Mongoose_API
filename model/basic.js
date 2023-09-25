let mongoose = require("mongoose");

let Model =new mongoose.Schema({
    studentName: {
        type: String,
        require: true
    },
    stuId:{
        type:Number,
        require:true
    },
    dept:{
        type:String,
    },
    email:{
        type:String,
        require:true
    },
    no:{
        type:String,
        require:true
    }
})

module.exports= mongoose.model("studentDetails",Model);