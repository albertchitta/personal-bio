import React from 'react';
import styled from 'styled-components';

const ContactStyle = styled.div`
  h1 {
    color: white;
  }
`;

export default function Contact() {
  return (
    <ContactStyle>
      <h1>Contact Me</h1>
    </ContactStyle>
  );
}
