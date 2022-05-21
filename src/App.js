// import "./App.css";
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
// import NavBrandLogo from "../public/images/navbrand.svg";

function App() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='https://openai.com/assets/images/favicon.svg?v=d04ebc881c'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{" "}
            OpenAI Shopify Challenge
          </Navbar.Brand>
        </Container>
      </Navbar>
      <main className='container mt-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={6}>
              <Form className='mb-2'>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Please enter prompt:</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows='5'
                    name='prompt'
                    placeholder='What would you like to tell the A.I.?'

                    // onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form>
              <div className='d-grid d-lg-flex justify-content-lg-end'>
                <Button className='align-self-end'>Submit</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className='justify-content-center'>
            <Col md={6}>
              <h3>Responses</h3>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <div className='d-flex'>
                    <Card.Text className='p-2 fw-bold'>Prompt:</Card.Text>
                    <Card.Text className='p-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                  </div>
                  <div className='d-flex'>
                    <Card.Text className='p-2 fw-bold'>Response:</Card.Text>
                    <Card.Text className='p-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error aliquam, quaerat quo enim culpa voluptatibus
                      nesciunt veritatis labore sint praesentium natus nobis
                      molestiae quae iusto assumenda pariatur rerum facilis
                      dolorem aperiam, fuga tenetur fugiat consequatur porro
                      quidem. Dignissimos, sapiente. Tempora cum quasi quos
                      nulla quas explicabo consectetur dignissimos ad. Libero!
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
