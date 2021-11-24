import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProject } from '../api/data/projectData';

const DetailsStyle = styled.div`
  max-width: 1200px;
  margin: 42px auto;
  color: black;

  img {
    max-width: 300px;
  }

  .btn {
    margin-right: 8px;
  }
`;

export default function Details() {
  const [project, setProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getProject(firebaseKey).then(setProject);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DetailsStyle>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-auto">
            <img src={project.image} className="img-fluid" alt={project.name} />
          </div>
          <div className="col">
            <div className="card-block px-2">
              <h1 className="card-title">{project.name}</h1>
              <p className="card-text">{project.description}</p>
              <a
                aria-label="github"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                aria-label="website"
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </DetailsStyle>
  );
}
