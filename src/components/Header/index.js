import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Div = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 30px 0;
  @media only screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Input = styled.input`
  border-radius: 3px;
  padding: 0 10px;
  @media only screen and (max-width: 426px) {
    width: 100%;
  }
`;

const Header = ({ handleSubmit, handleChange, handleDelete, value }) => {
  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="digite uma frase"
          name="palindromo"
          value={value}
          onChange={handleChange}
          data-test="entrada"
          autoFocus
        ></Input>
      </form>
      <Button onClick={handleDelete} />
    </Div>
  );
};
export default Header;
