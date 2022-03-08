//importation

import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS } from "../ActionTypes/contact"


// initialState
const initialState = {
    listContacts:[],
    errors:null,
    load:false
}

// pure function
const contactReducer =(state = initialState,{type,payload}) =>{
    switch (type) {
        case LOAD_CONTACTS: return{...state,load:true}
        case GET_CONTACTS: return{...state,load:false,listContacts: payload.listContacts}
        case FAIL_CONTACTS: return{...state,load:false,errors:payload}        
            
    
        default:
            return state
    }
}

export default contactReducer