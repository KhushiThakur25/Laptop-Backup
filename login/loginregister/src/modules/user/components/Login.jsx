import React from 'react'
import Button from '../../../shared/widgets/Button'
import PasswordField from '../../../shared/widgets/PasswordField'
import TextField from '../../../shared/widgets/TextField'

const Login = ({fn}) => {
  const toggling = ()=>{
    fn();

  }
  return (
    <div className='container' >
        <h1>Login</h1>
        <TextField labelvalue="UserId"/>
        <PasswordField passwordvalue="Password" />
        <Button title="login"  />
        <p> if not yet account created then..<Button fn={toggling} title="REGISTER"/></p>
    </div>
  )
}

export default Login