import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Certificates from './components/Certificates';
import Resume from './components/Resume';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/tools" component={Tools} />
        <Route path="/certificates" component={Certificates} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
};

export default App;
