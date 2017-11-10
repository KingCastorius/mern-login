import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Styles from '../styles'

class HomePage extends React.Component{
  render() {
    return(
      <div style={Styles.bgColor}>
        <p>Hello world</p>
      </div>
    )
  }
}

export default HomePage;
