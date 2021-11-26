import React from 'react';
import styled from 'styled-components';
import TechnologyForm from '../components/TechnologyForm';

const AddTechnologyStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  width: 100%;
  justify-content: center;

  h1 {
    color: #606c38;
    font-size: 45px;
    font-weight: 800;
    text-align: center;
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
