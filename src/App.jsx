import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";

// import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
     </Routes>
      <Footer/>
    </>
  );
}

export default App;