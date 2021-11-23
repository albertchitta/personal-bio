import React from 'react';
import styled from 'styled-components';
import TechnologyForm from '../components/TechnologyForm';

const AddTechnologyStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }
`;

export default function AddTechnology() {
  return (
    <AddTechnologyStyle>
      <h1>Add a Technology</h1>
      <TechnologyForm technology={{}} />
    </AddTechnologyStyle>
  );
}
