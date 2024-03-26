import { Container } from 'react-bootstrap';
import './login.css';
import { useState, useRef, useContext } from 'react';
import data from '../../mockdata';
import { authenticate } from '../../api/auth';
import { MainContext } from '../../context/mainContext';


export default function Login() {
  const {setUser} = useContext(MainContext)
  const[mockUser, setMockUser] = useState(data.users[0])
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = async() => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const res = await authenticate( email, password )
    if(res.status === 200) {
      setUser(res.data.user)
    }
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
      </div>
    </Container>
  );
}
