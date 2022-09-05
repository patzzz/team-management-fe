import React, { useEffect } from "react";

// LIBRARIES
import { Routes, Route, useLocation } from "react-router-dom";

// COMPONENTS
import Layout from "../components/Layout/Layout";
import Dashboard from "views/Dashboard/Dashboard";
import Projects from "views/Projects/Projects";
import Persons from "views/Persons/Persons";
import Authenticate from "views/Authenticate/Authenticate";

const AppRoutes = () => {
  // CONSTANTS USING HOOKS
  const { pathname } = useLocation();

  // USE EFFECT FUNCTIONS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Authenticate />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/persons"
        element={
          <Layout>
            <Persons />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
