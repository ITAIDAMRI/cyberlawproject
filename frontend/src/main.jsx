import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainProvider } from './context/mainContext.jsx'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <MainProvider>
        <App />
    </MainProvider>
)
