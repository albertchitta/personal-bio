/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProjects } from '../api/data/projectData';
import PublicProject from '../components/PublicProject';

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
      margin-left: 36px;
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

    .card {
      margin: 20px;
    }
  }
`;

export default function publicProjects() {
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
        <h1>Public Projects</h1>
      </div>
      <div className="card-container">
        {projects.length ? (
          projects.map((project) => (
            <PublicProject
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
