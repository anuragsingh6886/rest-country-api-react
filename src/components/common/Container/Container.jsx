import React from "react";
import { ContainerStyle } from "./containerStyle.style";

const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
