import { Container } from 'react-bootstrap';
import './signup.css';

export default function Signup() {
  return (
    <Container className='signupMainContainer'>
      <div className='signupPanel'>
        <h1>Sign up</h1>
        <div className='signupForm'>
          <label>firstName:</label>
          <input type="firstName" />
          <label>lastName:</label>
          <input type="lastName" />
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
        </div>
        <button className='btn btn-primary btn-lg'>Sign up</button>
      </div>
    </Container>
  );
}
