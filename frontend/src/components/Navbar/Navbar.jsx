import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../../context/mainContext';

export default function Navbar() {

    const {logout} = useContext(MainContext)

    const navStyle = {
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        alignItems: "center",

    }

    const linkStyle = {
        display: "flex",
        gap: "1rem",
    }

  return (
    <div style={navStyle}>
        <div style={linkStyle}>
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/documents">Tasks</Link>
        </div>
        <div>
            <button onClick={logout} className="btn btn-light">Logout</button>
        </div>
    </div>
  )
}
