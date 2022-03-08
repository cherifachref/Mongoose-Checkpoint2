import React, { useState } from 'react'
import axios from 'axios' 
import{Form,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import{Link} from 'react-router-dom'
import { postContact } from '../JS/Actions/contact'

function Add() {
  const dispatch = useDispatch()
  //const [newContact,setNewContact] = useState({name:"",email:"",phone:"",articleImage:"" })

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [phone,setPhone]= useState("")
  const [articleImage,setArticleImage]= useState("")

  /*const newContact={
    name,email,phone,articleImage
  }*/





  const abc = () =>{
    console.log('ffffffffffffffffffff')
  }


  const add = (e) =>{
    e.preventDefault();
    const newContact = new FormData();
    
    newContact.append("name",name);
    newContact.append("email",email);
    newContact.append("phone",phone);
    newContact.append("articleImage",articleImage);

    console.log( (newContact.get("articleImage"))&&true   ) 


      

      if(newContact.get("name") && newContact.get("email")&& newContact.get("phone")&&newContact.get("articleImage"))
      {dispatch(postContact(newContact)) && (window.location.href = "/")}
      


      /* window.location.href = "/" */

      
  }

  

  return (
    <div>
        <h2>Add Contact</h2>
        <Form onSubmit={add} encType="multipart/form-data">
          <Form.Group className="mb-3" >
            <Form.Label>NAME</Form.Label>
            <Form.Control  placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>phone</Form.Label>
            <Form.Control  placeholder="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Form.Control  type="file"  filename="articleImage"  onChange = {(e) => setArticleImage(e.target.files[0])}  />
          </Form.Group>
          <Button variant="primary" type="submit"  >Submit</Button>
        </Form>
    </div>
  )
}

export default Add