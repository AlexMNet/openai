import { Form, Button, Row, Col } from "react-bootstrap";

const FormComponent = ({
  handleSubmit,
  handleChange,
  handleOnChangeSelect,
  engine,
  loading,
  prompt,
}) => {
  return (
    <Row className='justify-content-center'>
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Please enter prompt:</Form.Label>
            <Form.Control
              as='textarea'
              rows='5'
              name='prompt'
              placeholder='What would you like to tell the A.I.?'
              value={prompt}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>A.I. Engine</Form.Label>
            <Form.Select value={engine} onChange={handleOnChangeSelect}>
              <option value='text-curie-001'>text-curie-001</option>
              <option value='text-davinci-002'>text-davinci-002</option>
              <option value='text-babbage-001'>text-babbage-001</option>
              <option value='text-ada-001'>text-ada-001</option>
            </Form.Select>
          </Form.Group>
          <div className='d-grid d-lg-flex justify-content-lg-end'>
            <Button
              className='align-self-end mt-2'
              type='submit'
              disabled={loading}
            >
              {loading ? "Loading" : "Submit"}
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
export default FormComponent;
