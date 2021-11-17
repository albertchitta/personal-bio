import React, { useState, useEffect } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createTechnology } from '../api/data/technologyData';

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

export default function TechnologyForm({ technology, user }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [technologies, setTechnologies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (technology.firebaseKey) {
        setFormInput({
          image: technology.image,
          name: technology.name,
          firebaseKey: technology.firebaseKey,
          uid: user.uid,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [technology]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (technology.firebaseKey) {
  //     updatePlayer(formInput).then((players) => {
  //       setPlayers(players);
  //       resetForm();
  //       history.push('/team');
  //     });
  //   } else {
  //     createPlayer({ ...formInput, uid: user.uid }).then((players) => {
  //       setPlayers(players);
  //       resetForm();
  //       history.push('/team');
  //     });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTechnology(formInput).then(() => {
      history.push('/technologies');
    });
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
            value={formInput.name}
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
            value={formInput.image}
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
  technology: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

TechnologyForm.defaultProps = { technology: {} };
