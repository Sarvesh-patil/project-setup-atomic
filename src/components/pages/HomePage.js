import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1>HomePage app route</h1>
      <Link to="/about">Go to About page</Link>
    </Fragment>
  );
};

export default HomePage;
