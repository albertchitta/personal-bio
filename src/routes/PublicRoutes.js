import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import PublicProjects from '../views/PublicProjects';
import PublicTechnologies from '../views/AdminTechnologies';
import Contact from '../views/Contact';
import SignIn from '../views/SignIn';

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/projects" component={() => <PublicProjects />} />
        <Route
          exact
          path="/technologies"
          component={() => <PublicTechnologies />}
        />
        <Route exact path="/contact" component={() => <Contact />} />
        <Route exact path="/signin" component={() => <SignIn user={user} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.node,
};

Routes.defaultProps = {
  user: null,
};
