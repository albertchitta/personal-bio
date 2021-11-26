/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getProjects } from '../api/data/projectData';
import AdminProject from '../components/AdminProject';

const ProjectsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  width: 80%;
  justify-content: center;

  .title {
    h1 {
      color: #606c38;
      font-size: 45px;
      font-weight: 800;
      text-align: center;
    }

    a {
      float: right;

      i {
        color: #dda15e;
        font-size: 25px;
        font-weight: 800;
      }

      i:hover {
        color: #bc6c25;
      }
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    justify-content: center;

    h3 {
      color: #283618;
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
