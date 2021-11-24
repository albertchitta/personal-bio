import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import AdminProjects from '../views/AdminProjects';
import AdminTechnologies from '../views/AdminTechnologies';
import Contact from '../views/Contact';
import AddTechnology from '../views/AddTechnology';
import EditTechnology from '../views/EditTechnology';
import AddProject from '../views/AddProject';
import EditProject from '../views/EditProject';
import Details from '../views/ProjectDetails';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={AdminProjects} />
        <Route exact path="/add-project" component={AddProject} />
        <Route exact path="/projects/:firebaseKey" component={Details} />
        <Route
          exact
          path="/edit-project/:firebaseKey"
          component={EditProject}
        />
        <Route exact path="/technologies" component={AdminTechnologies} />
        <Route exact path="/add-technology" component={AddTechnology} />
        <Route
          exact
          path="/edit-technology/:firebaseKey"
          component={EditTechnology}
        />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
