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
  justify-content: center;
  width: 80%;

  .title {
    h1 {
      color: #2f4550;
      font-size: 45px;
      font-weight: 800;
      text-align: center;
    }

    p {
      color: #586f7c;
      text-align: center;
      font-size: 24px;
    }

    a {
      float: right;

      i {
        color: #52b788;
        font-size: 25px;
        font-weight: 800;
      }

      i:hover {
        color: #40916c;
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
        <h1>Projects</h1>
        <p>Projects I designed and developed using React, JavaScript, CSS, and HTML.</p>
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
