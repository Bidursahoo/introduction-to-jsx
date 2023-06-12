//import logo from './logo.svg';
//import './App.css';
const fname = "Bidur";
const mname = "B";
const lname = "Sahoo";
function App() {
  return (
    <div className="App">
      <h1>HEllo Bidur How are YOu</h1>
      <ul>
        <li>BIdur</li>
        <li>Bibhab</li>
        <li>Sahoo</li>
      </ul>
      <p>Your love Number id {Math.floor(Math.random() *10)}</p>
      <p>Created By {`${fname} ${mname} ${lname}`}</p>
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
