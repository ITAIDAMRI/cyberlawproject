import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainProvider } from './context/mainContext.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { registerLicense } from '@syncfusion/ej2-base';
import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import "../node_modules/@syncfusion/ej2-documenteditor/styles/material.css";


registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCfUx0Q3xbf1x0ZFFMY1pbRnRPMyBoS35RckVgWHZedHdTRGJfVEd3');

ReactDOM.createRoot(document.getElementById('root')).render(
    <MainProvider>
        <App />
    </MainProvider>
)
