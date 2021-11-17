import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';
import Contact from '../views/Contact';
import AddTechnology from '../views/AddTechnology';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/projects" component={() => <Projects />} />
        <Route exact path="/technologies" component={() => <Technologies />} />
        <Route exact path="/contact" component={() => <Contact />} />
        <Route
          exact
          path="/add-technology"
          component={() => <AddTechnology />}
        />
      </Switch>
    </div>
  );
}
