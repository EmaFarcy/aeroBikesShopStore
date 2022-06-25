import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const objStyle = {color: 'white', backgroundColor: 'black', fontSize: 15};

function App() {
  return (
    <div className="App" style={objStyle}>
      <NavBar />
        <br />
      <body className="App-body">
        <ItemListContainer greetings="Hello and Welcome to Aero Bikes Shop Store! (coming soon)" />
      </body>
    </div>
  );
}

export default App;
