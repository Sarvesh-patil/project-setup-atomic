import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Fragment>
      <h1>AboutPage app route</h1>
      <Link to="/contact">Go to Contact page</Link>
    </Fragment>
  );
};

export default AboutPage;
