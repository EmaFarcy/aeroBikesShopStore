import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

const objStyle = {color: 'white', backgroundColor: 'black', fontSize: 15};

function App() {
  return (
    <div className="App" style={objStyle}>
      <NavBar />
      <body className="App-body">
        <div className="titleAndText">
					<p id="text_video">All the best cycling news, tech, rumors and reviews for road bikes, mountain bikes, gravel bikes, cyclocross, enduro, trail, eMTB and e-bikes. Pick up yours!</p>
			  </div>
        <ItemListContainer />   
      </body>
    </div>
  );
}

export default App;
