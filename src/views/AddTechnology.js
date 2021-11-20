import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TechnologyForm from '../components/TechnologyForm';

const AddTechnologyStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }
`;
export default function AddTechnology({ technology, setEditTechnology }) {
  return (
    <AddTechnologyStyle>
      <h1>Add/Edit a Technology</h1>
      <TechnologyForm
        technology={technology}
        setEditTechnology={setEditTechnology}
      />
    </AddTechnologyStyle>
  );
}

AddTechnology.propTypes = {
  technology: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  setEditTechnology: PropTypes.func.isRequired,
};

AddTechnology.defaultProps = { technology: {} };
