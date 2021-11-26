import React from 'react';
import styled from 'styled-components';

const ContactStyle = styled.div`
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

  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
    justify-content: center;
    // flex: 1;

    .card {
      width: 450px;
      height: 150px;
      border-radius: 6px;
      margin: 18px;
      background-color: #dda15e;
      border-color: white;

      .card-body {
        display: flex;
        flex-direction: row;

        .card-title {
          font-size: 24px;
          color: white;
        }

        i {
          font-size: 24px;
          color: white;
          background-color: #283618;
          border-radius: 50%;
          padding: 16px;
        }

        .fa-map-marker-alt {
          font-size: 32px;
        }

        .card-text {
          font-size: 18px;
          color: white;
        }

        .email {
          text-decoration: none;
        }
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
              <i className="fas fa-search-location" />
            </span>
            <div>
              <h5 className="card-title">Address</h5>
              <p className="card-text">Huntsville, Alabama</p>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}
