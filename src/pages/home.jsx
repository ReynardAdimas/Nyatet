import React from "react";
import PageLayout from "../layouts/pageLayouts";
import styled from "styled-components"; 
import NotesList  from "../components/NoteList";
import Container from "../components/ui/Container"; 
import Button from "../components/ui/button"; 


const Homepage = () => {
  return (
    <Container>
      <PageLayout>
        <Button>Add New Note</Button>
        <h1>All Notes</h1>
        <NotesList>All Notes</NotesList>
      </PageLayout>
    </Container>
  );
};

export default Homepage;
