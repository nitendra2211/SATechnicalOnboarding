/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Nitendra Singh",
  title: "Frontend developer | MLSA",
  email: "nitendrasingh2211@gmail.com",
  gitHub: "https://github.com/nitendra2211",
  instagram: "https://www.instagram.com/nitendra_here__?igshid=OGQ5ZDc2ODk2ZA==",
  linkedIn: "https://www.linkedin.com/in/nitendra-singh-66018225b",
  medium: "https://medium.com/@nitendrasingh2211",
  twitter: "https://twitter.com/nitendra_s90348",
  youTube: "https://youtube.com/@upheavalacademy376",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
