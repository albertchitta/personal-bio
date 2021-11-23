import React, { useState, useEffect } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createProject, updateProject } from '../api/data/projectData';

const FormStyle = styled.div`
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  padding: 16px;
  width: 644px;
  margin: 42px auto;

  Label {
    color: white;
  }

  Button {
    margin-top: 24px;
  }
`;

const initialState = {
  image: '',
  name: '',
};

export default function ProjectForm({ project = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (project.firebaseKey) {
        setFormInput({
          image: project.image,
          name: project.name,
          firebaseKey: project.firebaseKey,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [project]);

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(formInput).then(() => {
        resetForm();
        history.push('/projects');
      });
    } else {
      createProject(formInput).then(() => {
        resetForm();
        history.push('/projects');
      });
    }
  };

  return (
    <FormStyle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Project Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Add a name"
            value={formInput.name || ''}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Project Image</Label>
          <Input
            type="text"
            name="image"
            id="image"
            placeholder="Add an image"
            value={formInput.image || ''}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit" className="btn btn-success">
          {project.firebaseKey ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </FormStyle>
  );
}

ProjectForm.propTypes = {
  project: PropTypes.shape({}).isRequired,
};
