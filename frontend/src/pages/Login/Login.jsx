import { Container } from 'react-bootstrap';
import './login.css';
import { Link } from 'react-router-dom';

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
         {/*Add a button to navigate to the signup page 
        <Link to="/signup" className='btn btn-primary btn-lg'>Sign Up</Link>*/}
      </div>
    </Container>
  );
}
