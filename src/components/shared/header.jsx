import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/header-logo.png";

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
`;
const Header = () => {
  return (
    <Container>
        <img src={logo} alt="logo"/>
        <h1>Nyatet</h1>
    </Container>
  );
};

export default Header;
