import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Projects from "./pages/Projects/Main.js";
import Skills from "./pages/Skills/Skills.js";
import Footer from "./components/Footer/Footer.js";
import ProjectPage from "./pages/ProjectPage/projectPage.js";
import ScrollToTop from "./utils/scrollToTop.js";
import Contacts from "./pages/Contacts/Contacts.js";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
      ;
    </div>
  );
}

export default App;
