import React from 'react'
import{Card,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {deleteContact} from '../JS/Actions/contact'


function ContactCard({contact}) {
  const dispatch = useDispatch()
  
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={contact.articleImage}   />
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>{contact.email}</Card.Text>
                <Card.Text>{contact.phone}</Card.Text>
                <Card.Text>{contact.articleImage}</Card.Text>
                <Button onClick={()=>dispatch(deleteContact(contact._id))}>DELETE</Button>
            </Card.Body>
        </Card> 
    </div>
  )
}

export default ContactCard