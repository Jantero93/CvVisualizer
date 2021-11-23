/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

/** CSS, UI */
import { Button, Form, Modal } from 'react-bootstrap';

const LoginModal: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginClick = (): void => {
    console.log('test login');
  };

  return (
    <Modal show animation={false}>
      <Modal.Body>
        <Form>
          <Form.Group controlId="username-input">
            <Form.Label>Username</Form.Label>
            <Form.Control
              as={'input'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group controlId="password-input">
            <Form.Label>Password</Form.Label>
            <Form.Control
              as={'input'}
              type={'password'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Button onClick={handleLoginClick}>Login</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
