// importation
import { createStore,applyMiddleware,compose } from "redux";

// import rootReducer
import rootReducer from "../Reducers";
import thunk from 'redux-thunk'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//STORE
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

// export
export default store
