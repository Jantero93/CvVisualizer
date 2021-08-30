import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface Props {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FeatureForm: React.FC<Props> = ({
  showForm,
  setShowForm
}: Props) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Job Place</Form.Label>
        <Form.Control type="text" placeholder="Job place "></Form.Control>
        <Form.Text className="text-muted">The place you worked</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Descdription</Form.Label>
        <Form.Control type="text" placeholder="Write more!"></Form.Control>
      </Form.Group>
      <Button variant="primary">Add Feature</Button>
      <Button variant="secondary" onClick={() => setShowForm(false)}>
        Close
      </Button>
    </Form>
  );
};
