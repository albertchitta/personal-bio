import React from 'react';
import styled from 'styled-components';

const ContactStyle = styled.div`
  position: absolute;

  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 18px;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px auto;
    justify-content: center;

    .card {
      width: 400px;
      height: 150px;
      border-radius: 6px;
      margin: 18px;
      background-color: #111319;
      border-color: white;

      .card-title,
      .card-text,
      i {
        color: white;
      }
    }
  }
`;

export default function Contact() {
  return (
    <ContactStyle>
      <h1>Contact Me</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <i className="fas fa-phone-alt" />
            <h5 className="card-title">Phone</h5>
            <p className="card-text">+615 653 1650</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <i className="fas fa-envelope" />
            <h5 className="card-title">Email</h5>
            <p className="card-text">albert.w.chittaphong@gmail.com</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <i className="fas fa-map-marker-alt" />
            <h5 className="card-title">Address</h5>
            <p className="card-text">Huntsville, Alabama</p>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}
