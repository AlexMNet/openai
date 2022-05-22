// import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
// import axios from "axios";
import uuid from "react-uuid";

function App() {
  const [prompt, setPrompt] = useState("");
  const [dialog, setDialog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localDialog = localStorage.getItem("dialog");
    if (localDialog) {
      setDialog(JSON.parse(localDialog));
    }
  }, []);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Cannot complete request...");
          return;
        }
        return response.json();
      })
      .then((data) => {
        const currentDialog = {
          prompt: prompt,
          response: data.choices[0].text,
          id: uuid(),
        };
        const updatedDialog = [...dialog, currentDialog];
        setDialog(updatedDialog);
        localStorage.setItem("dialog", JSON.stringify(updatedDialog));
        setPrompt("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setPrompt("");
  };
  return (
    <>
      <Navbar bg='primary' variant='dark'>
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
        </Container>
        <Container>
          <Row className='justify-content-center'>
            <Col md={6}>
              <h3>{dialog.length > 0 && "Responses"}</h3>
              {dialog.map((d, idx) => (
                <Card
                  key={idx}
                  className='mb-2 bg-light'
                  style={{ width: "100%" }}
                >
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
        </Container>
      </main>
    </>
  );
}

export default App;
