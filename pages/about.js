import React from "react";
import withLayout from '../components/withLayout';

const About = () => {
  return (
    <div className="container">
      <h2>About Page</h2>
      <p>This is a simple About page</p>
    </div>
  );
};

export default withLayout(About);
