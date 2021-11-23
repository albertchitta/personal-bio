/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getProjects } from '../api/data/projectData';
import AdminProject from '../components/AdminProject';

const ProjectsStyle = styled.div`
  position: absolute;

  .title {
    display: flex;
    justify-content: space-between;

    h1 {
      color: white;
      font-size: 45px;
      font-weight: 800;
      margin-top: 116px;
      margin-left: 18px;
    }

    a {
      height: 10px;
      margin-top: 135px;
      margin-right: 50px;
      margin-left: 100px;

      i {
        color: green;
        font-size: 25px;
        font-weight: 800;
      }
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px auto;
    justify-content: center;

    h3 {
      color: white;
    }
  }
`;

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getProjects().then(setProjects);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ProjectsStyle>
      <div className="title">
        <h1>Admin Projects</h1>
        <Link to="/add-project">
          <i className="fas fa-plus" />
        </Link>
      </div>
      <div className="card-container">
        {projects.length ? (
          projects.map((project) => (
            <AdminProject
              key={project.firebaseKey}
              project={project}
              setProjects={setProjects}
            />
          ))
        ) : (
          <h3>No Projects Added</h3>
        )}
      </div>
    </ProjectsStyle>
  );
}
