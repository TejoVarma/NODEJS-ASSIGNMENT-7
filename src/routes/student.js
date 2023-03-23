const router = require("express").Router();
const Student = require("../models/schema");
const Id = require("../models/id");
router.post("/student", async (req,res)=>{
    let {currId} = await Id.findById("student_id");
    try{
        let  newStudent = await new Student({
            _id : currId,
            name: req.headers.name,
            currentClass : req.headers.currentclass,
            division : req.headers.division
        });
        let student = await newStudent.save();
        await Id.findByIdAndUpdate("student_id", {currId : `${currId+1}`})
        res.status(200).json({status:"success", result: student});
    }
    catch(err){
        res.status(401).json({status : "failed", message : err.message});
    }
});
router.put("/student/:id", async (req,res)=>{
    try{
        let id = await Student.findById(req.params.id);
        if(id)
        {
            let updatedStudent = await Student.findByIdAndUpdate(req.params.id,
                {name:req.headers.name,currentClass : req.headers.currentclass,division : req.headers.division}
                , {new : true});
            let student = await updatedStudent.save();
            res.status(200).json({status:"success", result: student});
        }
        else
        {
            res.json({status : "failed to update", message : "Not a valid Id"});
        }
    }
    catch(err)
    {
        res.status(401).json({status : "failed", message : err.message})
    }
});
router.get("/student", async (req,res)=>{
    try{
        let student = await Student.find();
        res.status(200).json({status:"success", result:student});
    }
    catch(err)
    {
        res.status(500).json({status:"failed", message:err.message});
    }
});
router.get("/student/:id", async (req,res)=>{
    try{
        let student = await Student.find({_id : req.params.id});
        if(student)
        {
                res.status(200).json({status:"success", result:student});
        }
        else
        {
            res.status(404).json({status:"failed",message: "No result found"});
        }
    }
    catch(err)
    {
        res.status(500).json({status : "failed to get", message : err.message});
    }
});
router.delete("/student/:id", async (req,res)=>{
    try{
        let id = await Student.findById(req.params.id);
        if(id)
        {
            await Student.findByIdAndDelete(req.params.id);
            res.status(200).json({status: "successfully deleted", message:id});
        }
        else
        {
            res.status(401).json({status:"failed", message : "Invalid Id"});
        }
    }
    catch(err)
    {
        res.status(401).json({status:"failed", message:err.message});
    }
});
module.exports = router;