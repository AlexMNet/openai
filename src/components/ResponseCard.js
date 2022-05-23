import { Card, Row, Col, Spinner } from "react-bootstrap";

const ResponseCard = ({ dialog, loading }) => {
  return (
    <Row className='justify-content-center'>
      <Col md={6}>
        <h3>{dialog.length > 0 && "Responses"}</h3>
        {loading && <Spinner animation='border' variant='primary' />}
        {dialog.map((d, idx) => (
          <Card key={idx} className='mb-2 bg-light' style={{ width: "100%" }}>
            <Card.Body>
              <div className='d-flex'>
                <Card.Text className='p-2 fw-bold'>Prompt:</Card.Text>
                <Card.Text className='p-2'>{d.prompt}</Card.Text>
              </div>
              <div className='d-flex'>
                <Card.Text className='p-2 fw-bold'>Response:</Card.Text>
                <Card.Text className='p-2'>{d.response}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  );
};
export default ResponseCard;
