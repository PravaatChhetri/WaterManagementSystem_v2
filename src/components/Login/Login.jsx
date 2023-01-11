// import { useState } from 'react';
// import { loginFields } from "../Login/formFields";
// import FormAction from "./FormAction";
// import FormExtra from "./FormExtra";
// import Input from "./Input";
// import desu from "./desu-2.png"
// import {UserContex} from '../App'

// const fields=loginFields;
// let fieldsState = {};
// fields.forEach(field=>fieldsState[field.id]='');

// export default function Login(){
//     const [loginState,setLoginState]=useState(fieldsState);

//     const handleChange=(e)=>{
//         setLoginState({...loginState,[e.target.id]:e.target.value})
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         authenticateUser();
//     }

//     //Handle Login API Integration here
//     const authenticateUser = () =>{
        
     
//         // let loginFields={
//         //         email:loginState['email-address'],
//         //         password:loginState['password']
//         // };
           
//         // const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}&apisecret=${apiSecret}`;
//         //  fetch(endpoint,
//         //      {
//         //      method:'POST',
//         //      headers: {
//         //      'Content-Type': 'application/json'
//         //      },
//         //      body:JSON.stringify(loginFields)
//         //      }).then(response=>response.json())
//         //      .then(data=>{
//         //         //API Success from LoginRadius Login API
//         //      })
//         //      .catch(error=>console.log(error))



//         fetch("/signinowner",{
//             method:"post",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify({
              
//                 password,
//                 email:email
//             })
            
//         }).then(res=>res.json())
//         .then(data=> {
           
//             if(data.error){
//               toast.error(data.error)
      
//             }
//             else{
//               console.log("Login Successful")
//                 localStorage.setItem("jwt", data.token)
//                 localStorage.setItem("user", JSON.stringify( data.user))
//                 dispatch({type:"USER", payload:data.user})
//                 history.push('/dashboard')
//             }
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//          }
    

//     return(
//     <div class=" bg-white box-border md:box-content mx-auto w-80 h-150 py-4 px-4 rounded-md "> 
//         <div className="flex justify-center ">
//                 <img 
//                     alt=""
//                     className="h-20 w-24"
//                     image src= {desu}/>
//             </div>
//         <h2 className='text-center text-xl'>Login to your Account</h2>
//         <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
//         <div className="-space-y-px">
//             {
//                 fields.map(field=>
//                         <Input
//                             key={field.id}
//                             handleChange={handleChange}
//                             value={loginState[field.id]}
//                             labelText={field.labelText}
//                             labelFor={field.labelFor}
//                             id={field.id}
//                             name={field.name}
//                             type={field.type}
//                             isRequired={field.isRequired}
//                             placeholder={field.placeholder}
//                     />
                
//                 )
//             }
//         </div>

//         <FormExtra/>
//         <FormAction handleSubmit={handleSubmit} text="Login"/>

//       </form>
//     </div>
//     )
// }



import React,{useContext, useState} from 'react'
import {Link,Navigate,useNavigate   } from 'react-router-dom'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import dhi from '../../assets/dhiLogo.png';

import {UserContex} from '../../App'


const Login = ()=>{
  const {state, dispatch }= useContext(UserContex)
//   const history =useHistory();
  const [email,setEmail] =  useState("");
  const [password,setPassword] =  useState("");
 const navigate= useNavigate()


  const PostData =()=>{

   const url = process.env.REACT_APP_SERVE+"/data/login"
    fetch(url,{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
        
          password,
          email:email
      })
      
  }).then(res=>res.json())
  .then(data=> {
     
      if(data.error){
        // toast.error(data.error)

      }
      else{
        console.log("Login Successful")
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify( data.user))
          dispatch({type:"USER", payload:data.user})
          
           navigate('/Dashboard')
      }
  })
  .catch(err=>{
      console.log(err)
  })

       }

    return(


<>
  {/* component */}
  <style dangerouslySetInnerHTML={{__html: "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')" }} />
  <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: 1000}}>
      <div className="md:flex w-full">
        <div className="hidden md:block w-1/2 bg-blue-50 py-10 px-10">

           <img  className="w-full " src={dhi}></img> 
        </div>
        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">Login </h1>
          </div>
          <div>
          <div className="flex -mx-3">
              
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor className="text-md text-gray-600 font-semibold px-1">Email</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                  <input type="email" required 
                  className="w-full -ml-10 pl-10 pr-3 py-2 placeholder-gray-400  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor className="text-md  text-gray-600 font-semibold px-1">Password</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                  <input type="password"  required
                  className="w-full -ml-10 pl-10 pr-3 py-2 placeholder-gray-400  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
           
            

            <div className="w-full px-3 mb-5">
                <button className="block w-full max-w-xs mx-auto bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 text-white rounded-lg px-3 py-3 font-semibold"
                
                onClick={()=> PostData()}
                >Login</button>
               {/* <ToastContainer/> */}

              </div>

            <div className=" px-12 mb-6 object-center"> 
              <a href="/reset">
                  Forgot Password?
              </a>
              <br></br>
              <a href="/signup">
                  Add Account?
              </a>
            </div>
              
    </div>
</div>

        
          </div>
        </div>
      </div>

</>
  


    );
}

export default Login;