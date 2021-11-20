import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TechnologyStyle = styled.div`
  .card {
    width: 250px;
    height: 250px;
    border-radius: 6px;
    background-color: #191c26;
    justify-content: center;
    border: none;

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

export default function Technology({ technology }) {
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
};
