import React, { useState, useEffect } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createTechnology, updateTechnology } from '../api/data/technologyData';

const FormStyle = styled.div`
  border-style: solid;
  border-color: #283618;
  border-width: 1px;
  padding: 16px;
  width: 644px;
  margin: 42px auto;
  border-radius: 10px;

  Label {
    color: #606c38;
  }

  Input {
    margin-bottom: 24px;
  }

  Button {
    margin-top: 24px;
    color: white;
    background-color: #dda15e;
    border-color: #283618;
  }

  Button:hover {
    background-color: #bc6c25;
  }
`;

const initialState = {
  image: '',
  name: '',
};

export default function TechnologyForm({ technology = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (technology.firebaseKey) {
        setFormInput({
          image: technology.image,
          name: technology.name,
          firebaseKey: technology.firebaseKey,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [technology]);

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
    if (technology.firebaseKey) {
      updateTechnology(formInput).then(() => {
        resetForm();
        history.push('/technologies');
      });
    } else {
      createTechnology(formInput).then(() => {
        resetForm();
        history.push('/technologies');
      });
    }
  };

  return (
    <FormStyle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Technology Name</Label>
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
          <Label for="image">Technology Image</Label>
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
          {technology.firebaseKey ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </FormStyle>
  );
}

TechnologyForm.propTypes = {
  technology: PropTypes.shape({}).isRequired,
};
