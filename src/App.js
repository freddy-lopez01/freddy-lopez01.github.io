import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cards from './components/Cards.jsx';
import Spacers from './components/Spacers.jsx'
function App() { return ( <> <Router>
        <NavBar/>
        <Hero/>
	  	<Cards 
        photo="me_camera.jpg" 
        title="Welcome to my website" 
        description="I am a PNW native who loves the outdoors and working in the tech industry. I have worked in the industry proffessionally for almost 2 years managing the HPC cluster, Talapas, at the University of Oregon" 
	  	alignment="left"
      />
	  <Spacers title="My Experience"/>
      <Cards 
        photo="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fq3xipjo43pg70979tvzz.png" 
        title="Another Card" 
        description="This is another example card." 
        //buttonLabel="Learn More" 
	  	alignment="right"
      />
	  <Cards 
        photo="https://i0.wp.com/9to5linux.com/wp-content/uploads/2020/04/RHEL-8.jpg?fit=1920%2C1076&ssl=1" 
        title="Welcome to my website" 
        description="TBD" 
        //buttonLabel="Shop Now" 
	  	alignment="left"
      />
      <Cards 
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK8uoM7XCJ-Od4EQvRQhhwLkXvNy9ZTKQnA&s" 
        title="Another Card" 
        description="This is another example card." 
        //buttonLabel="Learn More" 
	  	alignment="right"
      />
	  <Cards 
        photo="https://miro.medium.com/v2/resize:fit:1200/1*c8BaaE4zIVu9llxLouqPlg.png" 
        title="Welcome to my website" 
        description="TBD" 
        //buttonLabel="Shop Now" 
	  	alignment="left"
      />
      <Cards 
        photo="https://www.insightintodiversity.com/wp-content/uploads/2021/12/University-of-Oregon-Top-40-Most-Affordable-Online-Masters-in-Psychology-Programs-2021-696x435.jpeg" 
        title="Another Card" 
        description="This is another example card." 
        //buttonLabel="Learn More" 
	  	alignment="right"
      />
      </Router>
    </>
  );
}

export default App;
