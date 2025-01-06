import React from 'react';
import Header from './components/Header';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;