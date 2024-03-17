import { Container } from 'react-bootstrap';
import './login.css' 
export default function Login() {


  return (
    <Container className='loginMainContainer'>
        <div className='loginPanel'>
            <h1>Login</h1>
            <div className='loginForm'>
                <label>Email:</label>
                <input type="email" />
                <label>Password:</label>
                <input type="password" />
            </div>
            <button className='btn btn-primary btn-lg'>Login</button>
        </div>

    </Container>

  )
}
