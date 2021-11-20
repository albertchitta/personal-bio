/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { deleteTechnology, updateTechnology } from '../api/data/technologyData';

const TechnologyStyle = styled.div`
  .card {
    width: 250px;
    height: 250px;
    border-radius: 6px;
    background-color: #191c26;
    // border: none;
    border-color: white;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }

    .card-title {
      color: white;
      text-align: center;
    }

    i {
      color: white;
      cursor: pointer;
    }
`;

export default function Technology({
  technology,
  setTechnologies,
  setEditTechnology,
}) {
  const history = useHistory();

  const handleClick = (method) => {
    const del = confirm(`Are you sure you want to delete ${technology.name}?`);
    if (del && method === 'delete') {
      deleteTechnology(technology).then(setTechnologies);
    } else {
      updateTechnology(technology).then(setTechnologies);
    }
  };

  return (
    <TechnologyStyle>
      <div className="card">
        <img
          className="card-img-top"
          src={technology.image}
          alt={technology.name}
        />
        <div className="card-body">
          <h5 className="card-title">{technology.name}</h5>
        </div>
        <i className="fas fa-trash-alt" onClick={() => handleClick('delete')} />
        <i
          className="fas fa-edit"
          onClick={() => {
            setEditTechnology(technology);
            history.push('/add-technology');
          }}
        />
      </div>
    </TechnologyStyle>
  );
}

Technology.propTypes = {
  technology: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setEditTechnology: PropTypes.func.isRequired,
  setTechnologies: PropTypes.func.isRequired,
};
