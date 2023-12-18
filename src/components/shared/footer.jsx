import React from "react"; 
import styled from 'styled-components'; 

const Container = styled.div`
    margin:1rem; 
    padding:0.5rem; 
    min-height:10vh;
`;

const Footer = () => {
    return(
        <Container>
            <p>
                by <a href="https://github.com/ReynardAdimas">Reynard Adimas</a>
            </p>
        </Container>
    );
}; 

export default Footer;