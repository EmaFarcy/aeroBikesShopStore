import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/container/Cart/Cart';
import Products from './components/Products/Products';
import AboutUs from './components/AboutUs/AboutUs';
import "bootstrap/dist/css/bootstrap.min.css";
import Professional from './components/Item/professional';
import HomeImage from "../src/assets/images/home1.jpg";



const objStyle = {color: 'white', backgroundColor: 'black', fontSize: 15};

function App() {
  return (
      <div className="App" style={objStyle}>
        <NavBar />
        <body className="App-body">
            <div className="titleAndText">
            <img src={HomeImage} alt="HomeImage" />
					    <p id="text_video">All the best cycling news, tech, rumors and reviews for road bikes, mountain bikes, gravel bikes, cyclocross, enduro, trail, eMTB and e-bikes. Pick up yours!</p>
			      </div>
            <Routes>
              <Route index path="/" element={<ItemListContainer />}/>
              <Route path= "/:type" element={<ItemListContainer />}/>
              <Route path="/about" element={<AboutUs />}/>
              <Route path="/products/*" element={<Products />}/>
              <Route path="/details/:id" element={<Professional />}/> {/*este me tiene que llevar al detalle de una bicicleta Importo aca products?*/}
              <Route path="/cart" element={<Cart />}/> 
              <Route path="*" element={<Navigate to='/' /> } />  
            </Routes>
        </body>
      </div>
  );
}

export default App;
