// 1-require express
const express = require("express");

// 2-express router
const router= express.Router();

// 3-require model contact
const Contact =require("../models/Contact")

// multer
const multer = require('multer')
// multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './client/public')
    },
    filename: function (req, file, cb) {
      const fileName=file.originalname
      cb(null,fileName);
    }
  })
  
  const upload = multer({ storage:storage });

  

 
  

/**
 * @desc : testing route
 * @path : http://localhost:5400/api/contact/test
 * @method : GET
 * @data : no data
 */

router.get('/test',(req,res)=>{
    res.send({ms:"hello Achref"})
})

/**
 * @desc : add contact
 * @path : http://localhost:5400/api/contact/
 * @method : POST
 * @data : req.body
 */

router.post("/", upload.single("articleImage") ,async (req,res)=>{
    try {
       // const { name,email,phone,articleImage } = req.body
      //  const newContact = new Contact({name, email, phone, articleImage })
        const newContact = new Contact({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            articleImage:req.file.originalname
        })
        await newContact.save()
        res.status(200).send({msg: "Contact added successfully ...",newContact})
    } catch (error) {
        res.status(400).send({msg: "Can not add contact !!!",error})
    }
})

/**
 * @desc : get all contact
 * @path : http://localhost:5400/api/contact/
 * @method : GET
 * @data : no data
 */

router.get('/', async(req,res)=>{
    try {
        const listContacts = await Contact.find()
        res.status(200).send({msg:"this is the list of all contacts.. ",listContacts})
    } catch (error) {
        res.status(400).send({msg:"can not get all contacts !!!",error})
    }
})

/**
 * @desc : get one contact
 * @path : http://localhost:5400/api/contact/
 * @method : GET
 * @data : req.params._id
 */

router.get('/:id',async(req,res)=>{
    try {
        const contactToGet = await Contact.findOne({_id:req.params.id})
        res.status(200).send({msg:"I get the contact ..",contactToGet})
    } catch (error) {
        res.status(400).send({msg:"can not get  contact with this id !!!",error})
    }
})

/**
 * @desc : edit contact
 * @path : http://localhost:5400/api/contact/
 * @method : PUT
 * @data : req.params._id req.body
 */

router.put('/:_id',async(req,res)=>{
    try {
        const {_id} = req.params
        const result = await Contact.updateOne({_id},{$set :{...req.body}})
        res.status(200).send({msg:"contact updated...",msg2:req.params})
        

    } catch (error) {
        res.status(400).send({msg:"Can not update with this id!!!",error})
    }
})

/**
 * @desc : delete contact
 * @path : http://localhost:5400/api/contact/
 * @method : delete
 * @data : req.params._id
 */

router.delete('/:_id',async(req,res)=>{
    try {
       const {_id} = req.params
        await Contact.findOneAndDelete({_id})
        res.status(200).send({msg:'Contact deleted..'})
    } catch (error) {
       res.status(400).send({msg:"can not delete contact with this id!!!",error})
    }
})

   


//export
module.exports = router