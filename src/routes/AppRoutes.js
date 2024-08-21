import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("../components/pages/HomePage"));
const AboutPage = React.lazy(() => import("../components/pages/AboutPage"));
const ContactPage = React.lazy(() => import("../components/pages/ContactPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading....">
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback="Loading....">
            <AboutPage />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback="Loading....">
            <ContactPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
