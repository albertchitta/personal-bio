import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  width: 80%;
  align-items: center;
  text-align: center;
  justify-content: center;

  img {
    width: 50%;
    border-radius: 50%;
  }

  h1 {
    color: #2f4550;
    font-size: 45px;
    font-weight: 800;
  }

  p {
    color: #586f7c;
    font-size: 24px;
  }

  i {
    color: #586f7c;
    font-size: 24px;
    margin-top: 18px;
    padding: 0 18px;
    width: 60px;
    transition: all 0.2s linear;
  }

  .fab:hover {
    transform: scale(1.25);
    color: #2f4550;
  }

  .fa-facebook-f,
  .fa-download {
    border-style: none;
  }

  .line {
    border: 1px solid #2f4550;
    width: 100px;
    height: 100px;
  }

  .resume {
    color: #2f4550;
    border: 2px solid #000000;
    margin-top: 48px;
    background-color: transparent;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s ease 0s;
    padding: 12px 36px;
    text-decoration: none;
  }

  .resume:hover {
    background-color: #5bc0be;
    color: #f4f4f9;
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQF7dkuVxrM4xg/profile-displayphoto-shrink_200_200/0/1631904778566?e=1642636800&v=beta&t=5TBLaeYit7rWdYeb64ysCiei5ONiIvqhRNw3bm0B8tU"
        alt="Avatar"
      />
      <h1>Albert Chittaphong</h1>
      <p>
        Software developer with a focus in web design and performance.
      </p>
      <span>
        <a
          aria-label="facebook"
          href="https://www.facebook.com/Albert.Chittaphong/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <span className="line" />
        <a
          aria-label="twitter"
          href="https://twitter.com/albertwc_"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
        <span className="line" />
        <a
          aria-label="instagram"
          href="https://www.instagram.com/albertwc_/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <span className="line" />
        <a
          aria-label="github"
          href="https://github.com/albertchitta"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <span className="line" />
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/albertchittaphong/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </span>
      <a href="Albert_Chittaphong_Resume.pdf" download className="resume">
        Download Resume
      </a>
    </StyledHome>
  );
}
