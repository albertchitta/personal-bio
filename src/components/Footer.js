import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <i className="far fa-copyright" />
      <span>Albert Chittaphong. All rights reserved.</span>
    </FooterStyle>
  );
}
