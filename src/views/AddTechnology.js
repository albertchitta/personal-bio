import React from 'react';
import PropTypes from 'prop-types';
import TechnologyForm from '../components/TechnologyForm';

export default function AddTechnology({ technology, user }) {
  return (
    <div>
      <>
        <h1>Add a Technology</h1>
        <TechnologyForm technology={technology} user={user} />
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
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

AddTechnology.defaultProps = { technology: {} };
