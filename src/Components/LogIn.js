import React from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from '../Axios/Axios';
import { useDispatch } from 'react-redux';
import {SignIn} from '../Features/UserSlice';
function SignUp() {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();

   

    const onsubmit = (e) => {
      console.log(e);
      

       axios.post('/sigin',e).then((res)=>{
        console.log(res.data);
        if(res.data.status){
          dispatch(SignIn(res.data.user))
          navigate ('/home')
        }
  
       })
      // setSubmit(true)
      // console.log(email);
      // console.log(name);
    };

  return (
    <div>
        <div style={{display: 'flex', alignItems: 'center', position: 'absolute', top: '0', right: '0', marginTop: '1px', marginRight: '20px'}}>
            <p style={{marginRight: '10px'}}>dont have an account?</p>
            <button  style={{backgroundImage: 'linear-gradient(45deg, #9dbddd, #2a42a2)'}} onClick={()=>navigate('/')}>signin</button>
        </div>
           <div class="login-page">
      <div className="form">
        <div class="login">
          <div className="login-header">
            <h3>Welcome back!</h3>
            <p></p>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit(onsubmit)} >
            <label className="lab" for="uname"><b>Email</b></label>
          <input type="text" placeholder="Email adress" {...register('email' ,{required:'valid email'})}/>
          {errors?.email && (<p className="error">{errors?.email?.message}</p>)}
          <label className="lab" for="password">Password</label>
          <input type="password" placeholder="password" {...register('password',{required:'password required'})}/>
          {errors?.password && (<p className="error">{errors?.password?.message}</p>)}
          
          <button>login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp