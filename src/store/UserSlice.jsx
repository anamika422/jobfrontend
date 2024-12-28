import { createSlice } from '@reduxjs/toolkit'


let userDetails=JSON.parse(localStorage.getItem("jobPortal"))
const initialState = {
  login:userDetails? userDetails.login:false,
  token:userDetails? userDetails.token:"",
  role:userDetails? userDetails:""
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action)
      state.login=true;
      state.token=action.payload.token;
      state.role=action.payload.role
        },
        logOut:(state, action)=>{
          localStorage.removeItem('jobPortal');
          state.token = '';
          state.login = false;
          state.role = ''
        },
    
    },
   
   
})

// Action creators are generated for each case reducer function
export const { loginUser, logOut } = UserSlice.actions

export default UserSlice.reducer