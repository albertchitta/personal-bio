/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  width: 80%;
  justify-content: center;

  h1 {
    color: #606c38;
    font-size: 45px;
    font-weight: 800;
    text-align: center;
  }

  .about {
    font-weight: 600;
    margin-top: 50px;
    display: flex;

    .name,
    em,
    strong {
      color: #bc6c25;
    }

    p {
      max-width: 80%;
      color: #283618;
      font-size: 18px;
    }

    img {
      max-width: 40%;
      height: auto;
      border-radius: 10px;
      margin-bottom: auto;
    }
  }
`;

export default function About() {
  return (
    <StyledAbout>
      <h1>About Me</h1>
      <div className="about">
        <div className="about-text">
          <p>
            Hi, I'm <span className="name">Albert Chittaphong</span>
          </p>
          <p>
            I am a software developer, infatuated by <em>engineering</em> and{' '}
            <em>web design</em>.
          </p>
          <p>
            I grew up in a town called Murfreesboro and studied Computer
            Engineering at Middle Tennessee State University. My passion for
            knowledge in the most sophisticated products motivated me to join
            the world of engineering. Outside of engineering, I find a balance
            in life through my favorite activities: volleyball, tennis,
            badminton, and League of Legends.
          </p>
          <p>
            After graduating MTSU, I started a career as a systems analyst in
            Huntsville, Alabama. This was a great opportunity as I got to work
            with one of the main contractors for NASA's Marshall Space Flight
            Center. As an analyst, it was my duty to provide ground system
            support for the <em>International Space Station</em> and NASA's new
            program, the <em>Space Launch System</em>. Ground systems that I
            support include voice/video distribution, payload telemetry, and
            configuration management systems. Editing and troubleshooting
            software were outisde the scope of work, but the creativity made me
            realize what I really wanted to do.
          </p>
          <p>
            I decided to start a new chapter in my life and pursued a career in
            web development. I was referred to Nashville Software School where I
            strengthened my software skills and learned what it truly meant to
            be a software developer.
          </p>
        </div>
        <img
          src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/69859770_10219399785481141_8074258690770731008_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OmgNdiZ0DQIAX8X4oDI&tn=Re9uSSBXzpBeDS-G&_nc_ht=scontent-atl3-1.xx&oh=ec979b2cfb0cfdadf79a12671d8432ce&oe=61C2505F"
          alt="Avatar"
        />
      </div>
    </StyledAbout>
  );
}
