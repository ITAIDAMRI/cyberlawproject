import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MainContext } from './context/mainContext';
import Login from './pages/Login';
import Documents from './pages/Documents';
import EditorPage from './pages/Editor/editorPage';
import { checkToken } from './api/auth';
import Home from './pages/Home';
function App() {
  const {user} = useContext(MainContext)

  const onStartup = async () => {
    if(user) {
      const res =  await checkToken(user.token)
      console.log('TOKEN RESULT', res)
    }
  }

  useEffect(() => {
   onStartup() 
  }, [])

  

  const showRoutes = () => {
    return(
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/documents" element={<Documents/>} />
        </Routes>
      </Router>
    )
  }

  const showBase = () => {
    return user ? <>{showRoutes()}</> : <Login />
  }

  return (
    <div className="appMainContainer">
      {showBase()}
    </div>
  )
}

export default App
{/*import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from './context/mainContext';
import Navbar from './components/Navbar';
import Documents from './pages/Documents'; // Import the Documents component
import Login from './pages/Login';
import Signup from './pages/Sign_up'; // Import the Signup component

function App() {
  const { user } = useContext(MainContext);

  return (
    <div className="appMainContainer">
      {user && <Navbar />}
      <Router>
        <Routes>
          {user ? ( // Render "Home" and "Documents" routes if user is not null
            <>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/documents" element={<Documents />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;







import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from './context/mainContext';
import Login from './pages/Login';
import Documents from './pages/Documents';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  const { user } = useContext(MainContext);

  const showRoutes = () => {
    return (
      <div className="appMainContainer">
        <Router>
          {user && <Navbar />}  
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/documents" element={<Documents />} />
              </>
            ) : (
              <Route path="login" element={<Login />} />
               <Route path="sign" element={<Login />} />
            )}
          </Routes>
        </Router>
      </div>
    );
  }

  return showRoutes(); // Call the showRoutes function to render the routes
}

export default App;



*/}