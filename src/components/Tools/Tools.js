// Libraries
import React from 'react';

// Components
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from './components/Image';
import { Info } from './components/Info';

// Style
import './Tools.scss';

function Tools() {

  /**
   *
   */
  return (
    <div className="tools-section">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <Image />
          </div>
          <div className="col-md-6">
            <Info />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Tools;
