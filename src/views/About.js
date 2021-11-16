import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
  h1 {
    color: white;
  }
`;

export default function About() {
  return (
    <AboutStyle>
      <h1>About Me</h1>
    </AboutStyle>
  );
}
