
import './App.css';
import { HeroSection } from './components/HeroSection';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import {Parallaxa } from './components/Parallax'
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { AboutMe } from './components/AboutMe';



function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <HeroSection />
      <Skills />
      <Parallaxa />
      <Project />
      <Contact />
      <AboutMe />
    </div>
  );
}

export default App;
