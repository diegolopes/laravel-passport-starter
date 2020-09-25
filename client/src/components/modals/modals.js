import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import {isLogged} from  '../../api/auth';
import {getAuthToken , auth} from '../../api/auth';

function ModalLogin (){
    const [show, setShow] = useState(false);
    const login = isLogged();

    let history = useHistory();


    const handleClose = () => setShow(false);
    const handleShow = () => {

        if(login){
            alert('você já fez login :) ')
            history.push('/dashboard')
        }
        else {
            setShow(true)
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        getAuthToken(event)
        .then(data => {
            if(data.valid_login){
                auth(data.token);
                history.push('/dashboard')
            }
            else {
                alert('usuário ou senha incorretos')
            }
        })
        .catch(reason => console.log(reason.message))



    };

    return (
      <>
        <Button size="lg" onClick={handleShow} >
        <FontAwesomeIcon icon={faUserLock} /> { ' ' }
        Acessar
        </Button> { ' ' }

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email"  />
                <Form.Text  className="text-muted">
                    Digite seu email ou nome de usuário
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Manter conectado " />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Login
            </Button>
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalLogin;
