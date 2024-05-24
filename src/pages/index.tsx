import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import Greetings from "../components/props";
import { CreateImage } from "../components/props";
import type { Prop, Image } from "../components/props";
import Logo from "../images/kenergy.jpg";

const pageStyles = {
  textAlign: "center" as const,
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const divStyles = {
  padding: 10,
  fontSize: 20,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div style={divStyles}>
        <header> hello gamers how it's going</header>
        <p>I hope you enjoy your stay</p>
      </div>
      <Greetings name="Melvin" age={40} profession="youtuber"/>
      <Greetings name="Womble" age={60} profession="youtuber"/>
      <CreateImage title="ken photo" src={Logo}width ={420}height= {200}/>
      <div style={divStyles}>
        <Link to="/about"> About me</Link>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
