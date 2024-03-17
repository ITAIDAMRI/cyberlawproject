import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from './context/mainContext';
import Login from './pages/Login';
import Documents from './pages/Documents';
function App() {
  const {user} = useContext(MainContext)

  const showBase = () => {
    return user ? <>{showRoutes()}</> : <Login />
  }

  const showRoutes = () => {
    return(
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/documents" element={<Documents/>} />
        </Routes>
      </Router>
    )
  }

  return (
    <div className="appMainContainer">
      {showBase()}
    </div>
  )
}

export default App
