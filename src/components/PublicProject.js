import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectStyle = styled.div`
  position: relative;
  text-align: center;
  color: white;

  .card {
    width: 400px;
    border-radius: 6px;
    background-color: #191c26;
    justify-content: center;
    border: 1px solid white;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    .card-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
`;

export default function Project({ project }) {
  return (
    <ProjectStyle>
      <div className="card">
        <div className="card-body">
          <img
            className="card-img-top"
            src={project.image}
            alt={project.name}
          />
          <h5 className="card-title">{project.name}</h5>
          <Link to={`/projects/${project.firebaseKey}`}>
            <h2>Learn More</h2>
          </Link>
        </div>
      </div>
    </ProjectStyle>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
