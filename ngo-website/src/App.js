import React from 'react';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import VolunteerForm from './components/Volunteer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <CustomNavbar />
      <HeroSection />
      <About />
      <VolunteerForm />
    </>
  );
}

export default App;
