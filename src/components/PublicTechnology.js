import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TechnologyStyle = styled.div`
  .card {
    width: 200px;
    height: 200px;
    border-radius: 6px;
    background-color: #f4f4f9;
    border: none;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }

    .card-title {
      color: #586f7c;
      text-align: center;
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
