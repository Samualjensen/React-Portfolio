import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/*"
            element={<AboutMe />}
          />
          <Route
            path="/about"
            element={<AboutMe />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
        </Routes>
        <Footer />
      </div>

    </HashRouter>
  )
}

export default App;
