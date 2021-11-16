import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }
`;

export default function About() {
  return (
    <AboutStyle>
      <h1>About Me</h1>
    </AboutStyle>
  );
}
