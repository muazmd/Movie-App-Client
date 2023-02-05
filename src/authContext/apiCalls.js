import axios from "axios";
// import { Redirect } from "react-router-dom";
//import { Login } from "../../Pagess/Login/Login";
import { loginFailure, loginStart, loginSuccess, LOGOUT } from "./AuthAction";


export const login =  async (user,dispatch) =>{
    dispatch(loginStart());
    
    try {
    const res = await axios.post("auth/login",user );
    
     dispatch(loginSuccess(res.data));
     localStorage.setItem("user", JSON.stringify(res.data))
    

    } catch (err) {
        dispatch(loginFailure());
        
    }

}

export const logout =  (dispatch) =>{
    ///dispatch(loginStart());
    
    
  
        dispatch(LOGOUT());
        // <Redirect to='/login'/>
        
   

}