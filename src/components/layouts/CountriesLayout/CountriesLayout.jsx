import React from "react";
import { MainStyle } from "./countriesLayout.style";
import NavigationHeader from "../../common/NavigationHeader";
import { Outlet } from "react-router-dom";
import Container from "../../common/Container";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationHeader />
      <MainStyle>
        <Container>
          <Outlet />
        </Container>
      </MainStyle>
    </>
  );
};

export default MainLayout;
