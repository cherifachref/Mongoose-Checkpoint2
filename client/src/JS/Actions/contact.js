// IMPORTATION
import axios from 'axios'
import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS } from "../ActionTypes/contact"



// get all contacts
export const getContacts = () => async(dispatch) => {
    dispatch({type: LOAD_CONTACTS})
    try {
       let result = await axios.get('/api/contact/')
       dispatch({type:GET_CONTACTS,payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload:error.response})
        
    }
}

//add contact
export const postContact =(newContact) => async(dispatch) =>{
    try {
        
        await axios.post('/api/contact/',newContact)

        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload:error.response})
    }
}

// delete contact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload:error.response})
    }
}

// edit contact
export const editContact = (id,newContact) => async(dispatch) => {
    try {
        await axios.put(`/api/contact/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACTS, payload:error.response})
    }
}
