import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  color: #283618;
  text-align: center;
  background-color: red;
  height: 25px;

  i {
    margin-right: 5px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <i className="far fa-copyright" />
      <span>Albert Chittaphong. All rights reserved.</span>
    </StyledFooter>
  );
}
