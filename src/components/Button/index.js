import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  @media only screen and (max-width: 426px) {
    width: 150px;
    font-size: 14px;
    margin: 15px;
  }
`;

function Button(props) {
  return (
    <Buttons onClick={props.onClick} type={props.type} data-test="limpar-dados">
      Apagar Historico
    </Buttons>
  );
}

export default Button;
