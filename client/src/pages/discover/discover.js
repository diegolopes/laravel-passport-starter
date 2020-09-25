import React from 'react';
import '../../App.css';
import CustomNavbar from '../../components/navbar';
import './index.css';
import {Row, Container, Col, Card, Button} from 'react-bootstrap';


function Discover(){
    return(
        <>
            <CustomNavbar />
            <Container fluid>
                <h1>Página criada apenas para fins de teste. Aproveite e olhe os gatinhos aí embaixo :)</h1>
            <Row>
                <Col md="4">
                    <Card style={{  }}>
                    <Card.Img variant="top" src="https://placekitten.com/286/180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card style={{  }}>
                    <Card.Img variant="top" src="https://placekitten.com/286/180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card style={{  }}>
                    <Card.Img variant="top" src="https://placekitten.com/286/180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Discover;

