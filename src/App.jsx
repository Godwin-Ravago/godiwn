import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar.jsx';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';  
import Hobbies from './Pages/Hobbies.jsx';  
import Contact from './Pages/Contact.jsx'; 
import Education from './Pages/Education.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
