// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import FavList from "./Component/FavList/FavList";
import { Navbarr } from "./Component/Navbar/Navbar";
import './App.css';


function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/FavList' element={<FavList />} ></Route>
      </Routes>


    </>
  );
}

export default App;



