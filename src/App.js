import './App.css';
import Componenta from './Componenta';
import Assembly from './TeleOP/Assembly';
import Scena from './TeleOP/Scena';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    // <Componenta />
    // <Scena />
    // <Assembly />
    <Router>
      <Routes>
        <Route path='/' element={<Assembly />} />
        <Route path='/doi' element={<Componenta />} />
      </Routes>
    </Router>
  );
}

export default App;
