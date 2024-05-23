import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        Hi there! I'm the leader of Ken cult.
      </p>
      <Link to="/"> Go home</Link>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Me</title>;

