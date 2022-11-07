
import './App.css';
import { HeroSection } from './components/HeroSection';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { AboutMe } from './components/AboutMe';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<HeroSection />} />
        <Route path="skills" element={<Skills /> } />  
        <Route path="projects" element={<Project />} />
        <Route path="about-me" element={<AboutMe /> } />  
        <Route path="contact-me" element={<Contact /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
