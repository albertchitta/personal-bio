/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProjects } from '../api/data/projectData';
import PublicProject from '../components/PublicProject';

const ProjectsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  justify-content: center;

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
        <h1>Projects</h1>
        <p>Projects I designed and developed using React, JavaScript, CSS, and HTML.</p>
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
