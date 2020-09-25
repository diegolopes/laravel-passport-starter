import React from 'react';
import './App.css';
import CustomNavbar from './components/navbar/';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Col, Row, Image, Container} from 'react-bootstrap';
import AnimatedBackground from './components/animations';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';


import ModalLogin from './components/modals/modals';

function DiscoverBtn(){
  const history = useHistory();

  function goDiscover(){
    history.push('/discover')
  }
  return(
    <Button size="lg" variant="outline-dark" display="block" onClick={goDiscover}>
    <FontAwesomeIcon icon={faGlobe} /> { ' ' }
      Explorar
    </Button>
  )

}


function App() {
  return (
    <div className="App">
      <CustomNavbar />

      <AnimatedBackground />

      <Container>
      <Row>
        <Col className="pl-5" md="6">
          <h1 className="App-title">React.JS e Laravel Passport</h1>
          <ModalLogin />
          <DiscoverBtn />

        </Col>
        <Col md="6">
          <Image className="mb-5 d-none d-sm-block " style={{width: '500px'}} src="images/laravel_and_react.png" fluid />
        </Col>
      </Row>
      </Container>



      <footer className="footer mt-5">
        <div className="container">
          <span className="text-muted">2020 - Diego Lopes</span>
        </div>
      </footer>
    </div>
  );


}

export default App;
