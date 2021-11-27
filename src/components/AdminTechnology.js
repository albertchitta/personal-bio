/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { deleteTechnology } from '../api/data/technologyData';

const TechnologyStyle = styled.div`
  .card {
    width: 250px;
    height: 250px;
    border-radius: 6px;
    background-color: #f4f4f9;
    border-color: #283618;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }

    .card-title {
      color: #283618;
      text-align: center;
    }

    .mod {
      display: flex;
      justify-content: space-between;
      padding: 0 50px;
      align-items: center;
      font-size: 24px;

      i {
        color: #5bc0be;
        cursor: pointer;
      }

      i:hover {
        color: #586f7c;
      }
    }
`;

export default function Technology({ technology, setTechnologies }) {
  const handleClick = (method) => {
    const del = confirm(`Are you sure you want to delete ${technology.name}?`);
    if (del && method === 'delete') {
      deleteTechnology(technology).then(setTechnologies);
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
        <div className="mod">
          <Link to={`/edit-technology/${technology.firebaseKey}`}>
            <i className="fas fa-edit" />
          </Link>
          <i
            className="fas fa-trash-alt"
            onClick={() => handleClick('delete')}
          />
        </div>
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
  setTechnologies: PropTypes.func.isRequired,
};
