import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Contact from './Contact';
import { useRef } from 'react';
import Projects from './Projects';
import Skills from './Skills';
// https://tobiashjalmarsson.github.io/info-page
function App() {
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App">
      <Header skillsScroll={scrollSkills} homeScroll={scrollHome} contactScroll={scrollContact} projectScroll={scrollProject} />
      <Home contactScroll={scrollContact} homeAnchor={homeRef} />
      <Skills skillsAnchor={skillsRef} />
      <Projects projectAnchor={projectRef} />
      <Contact contactAnchor={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
