import React from "react";
import PageLayout from "../layouts/pageLayouts";
import styled from "styled-components";
import EditNoteForm from "../components/EditNoteForm";
import Container from "../components/ui/Container";

const EditPage = () => {
  return (
    <PageLayout>
      <Container>
        <h1>Edit Notes</h1>
        <EditNoteForm />
      </Container>
    </PageLayout>
  );
};

export default EditPage;
