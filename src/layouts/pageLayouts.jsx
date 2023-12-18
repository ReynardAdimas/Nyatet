import React from "react";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer"; 

const PageLayout = (props) => {
    const {children} = props; 

    return (
        <>
            <Header /> 
            {children} 
            <Footer />
        </>
    );
}; 

export default PageLayout;