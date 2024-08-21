import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <Fragment>
      <h1>ContactPage app route</h1>
      <Link to="/">Go to Home page</Link>
    </Fragment>
  );
};

export default ContactPage;
