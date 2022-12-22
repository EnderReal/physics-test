import './App.css';
import Componenta from './Componenta';
import Assembly from './TeleOP/Assembly';
import Scena from './TeleOP/Scena';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Overlay from './Overlay';

function App() {
  return (
    // <Componenta />
    // <Scena />
    // <Assembly />
    <Router>
      <Overlay />
      <Routes>
        <Route path='/' element={<Assembly />} />
        <Route path='/doi' element={<Componenta />} />
      </Routes>
    </Router>
  );
}

export default App;
