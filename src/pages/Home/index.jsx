import Hero from "../../components/Hero";
import About from "../../components/About";
import Logo from "../../components/Logo";
import Blog from "../../components/Blog";
import ContactForm from "../../components/ContactForm";

export default function Home() {

  return (
    <div id='home'>
      <Hero/>
      <About/>
      <Logo/>
      <Blog/>
      <ContactForm/>
    </div>
  )
}
