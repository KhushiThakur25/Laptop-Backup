import React from 'react'
import Button from '../../../shared/widgets/Button'
import PasswordField from '../../../shared/widgets/PasswordField'
import TextField from '../../../shared/widgets/TextField'

const Register = ({fn}) => {
  const toggle = ()=>{
    fn();
}
  return (
    <>
    <h1>Register</h1>
    <TextField labelvalue="UserId" />
    <PasswordField passwordvalue="Password"/>
    <TextField labelvalue="Name" />
    <TextField labelvalue="Phone" />
    <TextField labelvalue="Email" />
    <Button title="Register"  />
    <p> if you registered then..<Button fn={toggle} title="LOGIN"/></p>
    </>
  )
}

export default Register