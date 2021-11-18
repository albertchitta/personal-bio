import React from 'react';
import PropTypes from 'prop-types';
import TechnologyForm from '../components/TechnologyForm';

export default function AddTechnology({ technology, user, setEditTechnology }) {
  console.warn(technology);
  return (
    <div>
      <>
        <h1>Add a Technology</h1>
        <TechnologyForm
          technology={technology}
          user={user}
          setEditTechnology={setEditTechnology}
        />
      </>
    </div>
  );
}

AddTechnology.propTypes = {
  technology: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  setEditTechnology: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

AddTechnology.defaultProps = { technology: {} };
