import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Logo from "./pages/Logo";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Home />
      <About />
      <Logo/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;