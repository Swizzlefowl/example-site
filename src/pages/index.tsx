import * as React from "react"
import type {HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby";

const pageStyles = {
  textAlign: "center" as const,
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const divStyles = {
  padding: 10,
  fontSize: 20
};
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div style={divStyles}>
        <header> hello gamers how it's going</header>
        <p>I hope you enjoy your stay</p>
      </div>
      <div>
        <Link to="/about"> go here</Link>
      </div>
    </main>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
