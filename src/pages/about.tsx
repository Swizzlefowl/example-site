import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { CreateImage } from "../components/props";
import type { Image } from "../components/props";
import Logo from "../images/icon.png";

const pageStyle = {
  textAlign: "center" as const,
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const AboutPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyle}>
      <h1>About Me</h1>
      <CreateImage title="gatsby" src={Logo} width={400} height={400}> <p> does this work </p></CreateImage>
      <p>Hi there! I'm the leader of Ken cult.</p>
      <Link to="/"> Go home</Link>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Me</title>;
