/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
import { deleteProject, updateProject } from '../api/data/projectData';

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

export default function Project({
  project,
  setProjects,
  // setEditProject,
}) {
  // const history = useHistory();

  const handleClick = (method) => {
    const del = confirm(`Are you sure you want to delete ${project.name}?`);
    if (del && method === 'delete') {
      deleteProject(project).then(setProjects);
    } else {
      updateProject(project).then(setProjects);
    }
  };

  return (
    <TechnologyStyle>
      <div className="card">
        <img className="card-img-top" src={project.image} alt={project.name} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
        </div>
        <i className="fas fa-trash-alt" onClick={() => handleClick('delete')} />
      </div>
    </TechnologyStyle>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
  // setEditProject: PropTypes.func,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

// Project.defaultProps = { setEditProject: () => {} };
