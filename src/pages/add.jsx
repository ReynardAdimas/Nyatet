import React from "react";
import PageLayout from "../layouts/pageLayouts"; 
import styled from 'styled-components'; 
import Container  from "../components/ui/Container";
import AddNoteForm from "../components/AddNoteForm";

const AddPage = () => {
  return (
    <PageLayout>
      <Container>
        <h2>Add New Note</h2>
        <AddNoteForm />
      </Container>
    </PageLayout>
  );
};

export default AddPage;
