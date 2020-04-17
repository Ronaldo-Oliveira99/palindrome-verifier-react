import React, { useState } from "react";
import Container from "./components/Container";
import Palindrome from "./components/Palindrome";
import Header from "./components/Header";
import Title from "./components/Title";
import { TableHead, TableBody } from "./components/Tables";
import "./assets/style.css";

function App() {
  const [frase, setFrase] = useState("");
  const [frases, setFrases] = useState([]);

  const handleChange = (event) => {
    let input = event.target.value;
    setFrase(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (frase.trim() === "") {
      setFrase("");
      return;
    }
    const palindrome = Palindrome;
    const pali = palindrome(frase) ? "Sim" : "Não";
    setFrase("");
    setFrases([...frases, { frase, pali }]);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setFrases([]);
  };

  return (
    <Container>
      <Title />
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={frase}
        handleDelete={handleDelete}
      />
      <TableHead />
      {frases ? (
        frases.map((i, key) => (
          <TableBody
            key={key}
            frase={i.frase}
            pali={i.pali}
            verificacao={Palindrome(i.frase) ? "positivo" : "negativo"}
          />
        ))
      ) : (
        <h1>Palindromes</h1>
      )}
    </Container>
  );
}

export default App;
