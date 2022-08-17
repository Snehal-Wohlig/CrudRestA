const express = require('express');
const router = new express.Router();
const Student  = require("../models/data")




// Create = POST 
router.post("/student",async(req,res)=>{
    try{
        const addstudent = new Student(req.body)
        console.log(req.body);
        const insertstudent = await addstudent.save()
        res.status(201).send(insertstudent);
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/studentfind",async(req,res)=>{
    try{
        const getstudent = await Student.find({name:"ii"})
        res.send(getstudent);
    }catch(err){
        res.status(400).send(err)
    }
})

// want to UPDATE = PATCH 
router.patch("/student/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const patchstudent = await Student.findByIdAndUpdate(_id,req.body, {name:"ii"});
        res.send(patchstudent);
    }catch(err){
        res.status(500).send(err)
    }
})

// want to REMOVE = DELETE 
router.delete("/student/:id",async(req,res)=>{
    try{
        const delstudent = await Student.findByIdAndDelete(req.params.id);
        res.send(delstudent);
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;