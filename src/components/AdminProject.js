/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { deleteProject } from '../api/data/projectData';

const StyledProject = styled.div`
  text-align: center;
  color: white;

  .card {
    justify-content: center;
    width: 600px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 1px #888888;
    background-color: #f4f4f9;
    justify-content: center;
    margin: 0 24px 48px 24px;

    @media (max-width: 768px) {
      width: 300px;

      .card-body > .card-title {
        font-size: 18px;
      }

      .card-body > .learn-more {
        font-size: 12px;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    .card-body:hover {
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      transition: all 0.2s linear;

      img {
        filter: brightness(30%);
        transition: all 0.2s linear;
      }

      .card-title {
        visibility: visible;
      }

      .learn-more {
        visibility: visible;
      }
    }

    .card-title {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      visibility: hidden;
      font-size: 32px;
    }

    .learn-more {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      visibility: hidden;
      background-color: #5bc0be;
      border-color: #5bc0be;
    }

    .learn-more:hover {
      background-color: #586f7c;
      border-color: #586f7c;
    }
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
        margin-top: 20px;
      }

      i:hover {
        color: #586f7c;
      }
    }
  }
`;

const StyledLinks = styled.div`
  a {
    background-color: #5bc0be;
    border-color: #5bc0be;
    margin-right: 10px;
  }
  a:hover {
    background-color: #586f7c;
    border-color: #586f7c;
  }
`;

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  iframe {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      height: 100%;
    }
  }
`;

export default function Project({ project, setProjects }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (method) => {
    const del = confirm(`Are you sure you want to delete ${project.name}?`);
    if (del && method === 'delete') {
      deleteProject(project).then(setProjects);
    }
  };

  return (
    <StyledProject>
      <div className="card">
        <div className="card-body">
          <img
            className="card-img-top"
            src={project.image}
            alt={project.name}
          />
          <h5 className="card-title">{project.name}</h5>
          <button
            type="button"
            className="btn btn-primary learn-more"
            onClick={handleShow}
          >
            Learn More
          </button>
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
      </div>
      <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#2f4550' }}>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: '#586f7c' }}>
          <StyledVideo>
            <iframe
              src={project.loomUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
            <p>{project.description}</p>
          </StyledVideo>
        </Modal.Body>
        <Modal.Footer as="div" bsPrefix="modal-footer">
          <StyledLinks>
            <a
              aria-label="github"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary github"
              onClick={handleClose}
            >
              <i className="fab fa-github" />
              <span> GitHub</span>
            </a>
            <a
              aria-label="website"
              href={project.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary website"
              onClick={handleClose}
            >
              <i className="fas fa-external-link-alt" />
              <span> Website</span>
            </a>
          </StyledLinks>
        </Modal.Footer>
      </Modal>
    </StyledProject>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    githubUrl: PropTypes.string,
    websiteUrl: PropTypes.string,
    loomUrl: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
};
