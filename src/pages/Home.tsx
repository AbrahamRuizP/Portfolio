import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import SoftSkills from "../components/SoftSkills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import { Experience } from "../components/Experience";

const Home = () => (
    <>
        <NavBar />
        <Header />
        <About />
        <Experience />
        <Skills />
        <SoftSkills />
        <Projects />
        <Contact />
        <Footer />
    </>
)

export default Home;
