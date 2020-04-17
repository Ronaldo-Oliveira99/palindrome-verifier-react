import React from "react";

const TableHead = () => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr className="table-success">
          <th scope="col">Frase</th>
          <th scope="col">Palíndromo</th>
        </tr>
      </thead>
    </table>
  );
};

const TableBody = ({ frase, pali, verificacao }) => {
  return (
    <table className="table table-striped">
      <tbody className="table table-striped">
        <tr data-verificado={verificacao}>
          <td>{frase}</td>
          <td>{pali}</td>
        </tr>
      </tbody>
    </table>
  );
};

export { TableHead, TableBody };
