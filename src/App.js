// import logo from './logo.svg';
import './App.css';
import ItemlistContainer from './components/ItemlistContainer/ItemlistContainer';
import Navbar from './components/Navbar/Navbar';
import Marquesina from './components/Marquesina/Marquesina';




function App() {
  return   ( 
    <>
      
      <Navbar/>
      <Marquesina/>
      <ItemlistContainer 
      greeting={"Hola, Bienvenido a nuestra tienda"}/>
      
      
      
      
      

    </>
    );
}

export default App;
