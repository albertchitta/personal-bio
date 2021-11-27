/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { deleteProject } from '../api/data/projectData';

const ProjectStyle = styled.div`
  text-align: center;
  color: white;

  .card {
    justify-content: center;
    width: 400px;
    border-radius: 6px;
    background-color: #f4f4f9;
    border-color: #283618;
    justify-content: center;
    margin: 24px;

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
  }
`;

export default function Project({ project, setProjects }) {
  const handleClick = (method) => {
    const del = confirm(`Are you sure you want to delete ${project.name}?`);
    if (del && method === 'delete') {
      deleteProject(project).then(setProjects);
    }
  };

  return (
    <ProjectStyle>
      <div className="card">
        <img className="card-img-top" src={project.image} alt={project.name} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
        </div>
        <Link to={`/projects/${project.firebaseKey}`}>
          <h2>Learn More</h2>
        </Link>
        <div className="mod">
          <Link to={`/edit-project/${project.firebaseKey}`}>
            <i className="fas fa-edit" />
          </Link>
          <i
            className="fas fa-trash-alt"
            onClick={() => handleClick('delete')}
          />
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
  setProjects: PropTypes.func.isRequired,
};
