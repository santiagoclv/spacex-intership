import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Typography variant="h6">SpaceX Launches</Typography>
        </Link>
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;
