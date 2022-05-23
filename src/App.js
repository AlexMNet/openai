// import "./App.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import uuid from "react-uuid";
import { Nav, FormComponent, ResponseCard } from "./components";

function App() {
  const [prompt, setPrompt] = useState("");
  const [dialog, setDialog] = useState([]);
  const [engine, setEngine] = useState("text-curie-001");
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

  const handleOnChangeSelect = (e) => {
    setEngine(e.target.value);
  };

  const data = {
    prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
    },
    body: JSON.stringify(data),
  };

  const url = `https://api.openai.com/v1/engines/${engine}/completions`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url, fetchOptions)
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
        const updatedDialog = [currentDialog, ...dialog];
        setDialog(updatedDialog);
        localStorage.setItem("dialog", JSON.stringify(updatedDialog));
        setPrompt("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Nav />
      <main className='container mt-5'>
        <Container>
          <FormComponent
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleOnChangeSelect={handleOnChangeSelect}
            engine={engine}
            loading={loading}
            prompt={prompt}
          />
          <ResponseCard loading={loading} dialog={dialog} />
        </Container>
      </main>
    </>
  );
}

export default App;
