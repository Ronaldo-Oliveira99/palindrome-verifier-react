import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin: 100px auto;
  padding: 20px;
  border: 2px greenyellow solid;
  border-radius: 5px;
  color: gray;
  text-align: center;
  @media only screen and (max-width: 425px) {
    width: 250px;
  }
`;

export default Container;

// / const { Fragment, useState, useEffect } = React;
// function Title() {
//   return (
//     <div>
//       <h1>Verificador de palíndromo</h1>

//     </div>

//   )
// }

// function Button(props) {
//   return (
//     <button
//       onClick={props.onClick}
//       type={props.type}
//       data-test="limpar-dados">
//       Apagar Historico
//         </button>

//   )
// }

// function Input(props) {
//   let [frase, setFrase] = useState("")

//   const handleChange = event => setFrase(event.target.value)

//   const handleKeyPress = (event) => {
//     if (event.key == 'Enter') {
//       event.preventDefault()
//       handleSubmit()

//     }
//   }

//   const handleSubmit = () => {

//     if (frase.trim() === "") {
//       setFrase("")
//       return
//     }

//     const pali = Palindrome(frase) ? 'Sim' : 'Não'
//     props.onSubmit({ frase, pali })
//     setFrase("")

//     // console.log(frase);

//   }

//   return (
//     <input
//       type="text"
//       placeholder="palindromo"
//       name="palindromo"
//       value={frase}
//       onChange={handleChange}
//       onKeyPress={handleKeyPress}
//       data-test="entrada"
//       autoFocus
//     >
//     </input>

//   )
// }

// //  FORMULÁRIOS
// function Form(props) {

//   return (
//     <form >
//       <Title />

//       <Input onSubmit={props.submit} />

//       <Button
//         type='submit'
//         onClick={props.deleteAll} />

//     </form>

//   )
// }

// // TABELAS
// function Tabela(props) {

//   // const frases = props.rows
//   // const filterFrase = (item) => item.frase

//   // const filtro = frases.filter(filterFrase , index  => {
//   //     return index
//   // })
//   // console.log("filtrado", filtro)

//   return (
//     <table className="table" id={props.id}>
//       <thead>
//         <tr>
//           {props.headers.map(header => (
//             <th key={header}>{header}</th>

//           ))}
//         </tr>

//       </thead>

//       <tbody>
//         {props.rows.map((row, index) => (
//           <tr key={index}>

//             {Object.values(row).map((value, index) => (
//               <Fragment>
//                 {index === 0
//                   ? <td key={value + index} data-verificado={Palindrome(value) ? 'positivo' : 'negativo'}>{value}</td>

//                   : <td key={value + index}>{value}</td>

//                 }
//               </Fragment>

//             ))}
//           </tr>

//         ))}
//       </tbody>

//     </table>

//   )
// }
// function TabelaFrases(props) {
//   return (
//     <section>
//       <Tabela
//         id="palindromo"
//         headers={["Frase", "Palindromo"]}
//         rows={props.frases}

//       />

//     </section>

//   )
// }

// function Table() {

// }

// function Palindrome(str) {
//   const str1 = str.replace(/[^a-zA-Z0-9]/g, "")
//   const tam = str1.length
//   let fraseMod = str1.toUpperCase().split('')
//   let fraseInv = str1.toUpperCase().split('').reverse()
//   let iguais = true

//   for (var i = 0; i < tam; i++) {
//     if (fraseMod[i].charCodeAt() !== fraseInv[i].charCodeAt()) {
//       iguais = false
//       break
//     }
//   }
//   let isPalindrome = iguais
//   return isPalindrome
// }

// function App() {
//   const [frases, setFrases] = useState([])
//   const handleSubmitFrase = frase => setFrases([...frases, frase])
//   const handleDeleteAll = function () {
//     event.preventDefault()
//     setFrases([])
//   }

//   console.log(frases)
//   return (
//     <Fragment>
//       <Form submit={handleSubmitFrase}
//         deleteAll={handleDeleteAll}
//       />

//       <TabelaFrases frases={frases}
//       />

//     </Fragment>

//   )
// }

// ReactDOM.render(
//   <App />,

//   document.getElementById('root')
// )
console.log();
