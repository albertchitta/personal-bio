import React from 'react';
import styled from 'styled-components';

const ContactStyle = styled.div`
  position: absolute;
  width: 80%;

  h1 {
    color: white;
    font-size: 45px;
    font-weight: 800;
    margin-top: 116px;
    margin-left: 36px;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px auto;
    justify-content: center;

    .card {
      width: 450px;
      height: 150px;
      border-radius: 6px;
      margin: 18px;
      background-color: #111319;
      border-color: white;

      .card-body {
        display: flex;
        flex-direction: row;
      }

      .card-title {
        font-size: 25px;
        color: white;
      }

      i {
        font-size: 24px;
        color: white;
        background-color: #34495e;
        border-radius: 50%;
        padding: 16px;
      }

      .card-text {
        font-size: 24px;
        color: #a3a9bd;
      }

      .email {
        text-decoration: none;
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
            <span className="fa-stack fa-2x">
              <i className="fas fa-phone-alt" />
            </span>
            <div>
              <h5 className="card-title">Phone</h5>
              <p className="card-text">+615 653 1650</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <span className="fa-stack fa-2x">
              <i className="fas fa-envelope" />
            </span>
            <div>
              <h5 className="card-title">Email</h5>
              <a
                className="email"
                href="mailto:albert.w.chittaphong@gmail.com"
                target="_top"
              >
                <p className="card-text">albert.w.chittaphong@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <span className="fa-stack fa-2x">
              <i className="fas fa-map-marker-alt" />
            </span>
            <div>
              <h5 className="card-title">Address</h5>
              <p className="card-text">Huntsville, AL</p>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}
