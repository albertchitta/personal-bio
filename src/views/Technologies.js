import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTechnologies } from '../api/data/technologyData';
import Technology from '../components/Technology';

const TechnologiesStyle = styled.div`
  position: absolute;

  .title {
    display: flex;
    justify-content: space-between;

    h1 {
      color: white;
      font-size: 45px;
      font-weight: 800;
      margin-top: 116px;
      margin-left: 18px;
    }

    a {
      height: 10px;
      margin-top: 135px;
      margin-right: 50px;
      margin-left: 100px;

      i {
        color: green;
        font-size: 25px;
        font-weight: 800;
      }
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px auto;
    justify-content: center;

    h3 {
      color: white;
    }
  }
`;

export default function Technologies({ setEditTechnology }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getTechnologies().then(setTechnologies);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <TechnologiesStyle>
      <div className="title">
        <h1>Technologies</h1>
        <Link to="/add-technology">
          <i className="fas fa-plus" />
        </Link>
      </div>
      <div className="card-container">
        {technologies.length ? (
          technologies.map((technology) => (
            <Technology
              key={technology.firebaseKey}
              technology={technology}
              setTechnologies={setTechnologies}
              setEditTechnology={setEditTechnology}
            />
          ))
        ) : (
          <h3>No Technologies Added</h3>
        )}
      </div>
      {/* <div className="card-container">
        <div className="card">
          <img
            className="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            alt="Javascript Logo"
          />
          <div className="card-body">
            <h5 className="card-title">JavaScript</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://image.flaticon.com/icons/png/512/919/919851.png"
            alt="React Logo"
          />
          <div className="card-body">
            <h5 className="card-title">React</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"
            alt="HTML5 Logo"
          />
          <div className="card-body">
            <h5 className="card-title">HTML5</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://image.flaticon.com/icons/png/512/732/732190.png"
            alt="CSS3 Logo"
          />
          <div className="card-body">
            <h5 className="card-title">CSS3</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://image.flaticon.com/icons/png/512/919/919831.png"
            alt="Sass Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Sass</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://code.visualstudio.com/assets/updates/1_35/logo-stable.png"
            alt="Visual Studio Code Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Visual Studio Code</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
            alt="Bootstrap Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Bootstrap</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
            alt="Firebase Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Firebase</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
          />
          <div className="card-body">
            <h5 className="card-title">GitHub</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Figma</h5>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://api.badgr.io/public/assertions/RCaLPLRLRWqPxY4NUzQ46g/image"
            alt="Postman Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Postman</h5>
          </div>
        </div>
      </div> */}
    </TechnologiesStyle>
  );
}

Technologies.propTypes = {
  setEditTechnology: PropTypes.func,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

Technologies.defaultProps = { setEditTechnology: () => {} };
