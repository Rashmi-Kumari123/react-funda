import { React, useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    fullName : "",
    email : "",
    password : ""

  })
  const handleChange=(e)=>{
    const {value, name} = e.target;
    setFormData({...formData, [name]: value});

    
  }
  const handleSubmit=(e)=>{
    e.preventDefault(); // form will reload automatically
    console.log("on submit", formData)
  }
  return (
    <div>
      <h1 className='font-bold text-2xl pb-6'>Login Form</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your fullName' name='fullName' onChange={handleChange} value = {formData.fullName}/></div>
      <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your email' name='email' onChange={handleChange}  value = {formData.email}/></div>
      <div><input className='border ps-4 py-4 rounded-md lg:w-[33%] w-full' type='text' placeholder='Enter your password' name='password'onChange={handleChange} value = {formData.password}/></div>
      <button type="submit" className='lg:w-[33%] bg-slate-300 py-3 rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default Login