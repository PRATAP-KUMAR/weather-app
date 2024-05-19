import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CitiesContextProvider } from './context/CtiesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CitiesContextProvider>
    <App />,
  </CitiesContextProvider>
);
