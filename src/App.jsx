// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'


import Nav from './components/Nav'
import TextEditingContainer from './components/TextEditingContainer'
import PCInputContainer from './components/PCInputContainer'
import Title from './components/Title'

// import Footer from './components/footer'
// import ContactMe from './components/contactme'
// import ProjectContainer from './components/project-container'

import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
    	<Title />
    	<TextEditingContainer />
      	<PCInputContainer />
    </div>
  );
}

export default App;
