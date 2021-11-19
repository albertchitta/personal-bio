import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import AdminProjects from '../views/AdminProjects';
import AdminTechnologies from '../views/AdminTechnologies';
import Contact from '../views/Contact';
import AddTechnology from '../views/AddTechnology';

export default function Routes({ user, setEditTechnology }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/projects" component={() => <AdminProjects />} />
        <Route
          exact
          path="/technologies"
          component={() => <AdminTechnologies />}
          user={user}
          setEditTechnology={setEditTechnology}
        />
        <Route exact path="/contact" component={() => <Contact />} />
        <Route
          exact
          path="/add-technology"
          component={() => (
            <AddTechnology setEditTechnology={setEditTechnology} />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  setEditTechnology: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};
