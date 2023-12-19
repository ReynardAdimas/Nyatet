import React from "react";
import PageLayout from "../layouts/pageLayouts";
import styled from "styled-components";
import AddNoteForm from "../components/AddNoteForm";
import Container from "../components/ui/Container";

const EditPage = () => {
  return (
    <PageLayout>
      <Container>
        <h1>Edit Notes</h1>
        <EditForm />
      </Container>
    </PageLayout>
  );
};

export default EditPage;
