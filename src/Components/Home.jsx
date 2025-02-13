import { Helmet } from "react-helmet";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Piah Islam | Portfolio</title>
            </Helmet>
            <Navbar></Navbar>
            <section id="home" ><Hero></Hero></section>
            <section id="about" ><About></About></section>
            <section id ="skills"><Skills></Skills></section>
            <section id="projects"><Projects></Projects></section>
            <section id="contact"  ><Contact></Contact></section>
            <Footer></Footer>
        </div>
    );
};

export default Home;