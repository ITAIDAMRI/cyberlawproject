import { Container } from 'react-bootstrap';
import './login.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import data from '../../mockdata';
import { authenticate } from '../../api/auth';


export default function Login() {

  const[mockUser, setMockUser] = useState(data.users[0])
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = async() => {
    const res = await authenticate()
    console.log(res)
  }

  return (
    <Container className='loginMainContainer'>
      <div className='loginPanel'>
        <h1>Login</h1>
        <div className='loginForm'>
          <label>Email:</label>
          <input ref={emailRef} defaultValue={mockUser.email} type="email" />
          <label>Password:</label>
          <input ref={passwordRef} defaultValue={mockUser.password} type="password" />
        </div>
        <button onClick={handleLogin} className='btn btn-primary btn-lg'>Login</button>
         {/*Add a button to navigate to the signup page 
        <Link to="/signup" className='btn btn-primary btn-lg'>Sign Up</Link>*/}
      </div>
    </Container>
  );
}
