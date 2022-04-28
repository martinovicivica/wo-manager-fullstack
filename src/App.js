import './App.css';
import Workovers from './pages/Workovers';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Workovers />} />
      </Routes>
    </Router>
  );
}

export default App;
