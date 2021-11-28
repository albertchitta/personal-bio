import React from 'react';
import styled from 'styled-components';

const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px auto;
  width: 80%;
  justify-content: center;

  h1 {
    color: #2f4550;
    font-size: 45px;
    font-weight: 800;
    text-align: center;
  }

  p {
    color: #586f7c;
    text-align: center;
    font-size: 24px;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
    justify-content: center;

    .card {
      width: 450px;
      height: 150px;
      border-radius: 6px;
      margin: 18px;
      background-color: #2f4550;
      border-color: #f4f4f9;
      color: #f4f4f9;

      @media (max-width: 768px) {
        width: 300px;
      }

      .card-body {
        display: flex;
        flex-direction: row;

        .card-title {
          font-size: 24px;
          color: white;
        }

        i {
          font-size: 24px;
          color: #f4f4f9;
          background-color: #586f7c;
          border-radius: 50%;
          padding: 16px;
        }

        .card-text {
          font-size: 16px;
          color: white;

          @media (max-width: 768px) {
            font-size: 12px;
          }
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
      <p>Have any questions? I&apos;d love to hear from you.</p>
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
