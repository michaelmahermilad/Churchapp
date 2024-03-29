import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
 
import { formDetailsReducer, userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateFormReducer, userUpdateProfileReducer } from "./Reducers/UserReducers";
import { sectionDetailsReducer } from "./Reducers/SectionReducer";

const reducer = combineReducers({
 
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer, 
   userDetails: userDetailsReducer,
   userFormDetails: userUpdateFormReducer,
   update:userUpdateProfileReducer,
   formDetails:formDetailsReducer,
   forms:formsReducer,
   sections:sectionDetailsReducer,

});

 
  const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
 
 

const initialState = {
 
  userLogin:{userInfo:userInfoFromLocalStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;