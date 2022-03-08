import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../JS/Actions/contact'
import ContactCard from './ContactCard'

function ContactList() {
const dispatch=useDispatch()
const listContacts=useSelector(state=>state.contactReducer.listContacts)
const load = useSelector(state => state.contactReducer.load)

useEffect(()=>{
dispatch(getContacts())
},[dispatch])

  return (
    <div>
        <h2>contact list</h2>
        <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>{load?<h2>spiner</h2>:listContacts.map((el)=><ContactCard contact={el} kye={el._id} />)}</div>
    </div>
  )
}

export default ContactList