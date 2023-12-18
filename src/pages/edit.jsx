import React from "react";
import PageLayout from "../layouts/pageLayouts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const Form = styled.form`
 display: flex: 
 flex-direction: column; 
 min-width: 30vw; 
 margin: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  color: #4a5568;
`;

const Input = styled.input`
  margin: 1rem 0;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  margin: 1rem 0;
  padding: 0.5rem;
  resize: none;
`;

const Button = styled.button`
  background: #3182ce;
  color: white;
  font-size: 1em;
  margin: 1rem 0;
  padding: 0.75rem;
  border: 2px solid white;
  border-radius: 5px;
`;

const EditForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Title:</Label>
        <Input type="text" name="title" />
      </FormGroup>
      <FormGroup>
        <Label>Note:</Label>
        <TextArea name="note" />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Save</Button>
        <Button type="submit">Delete</Button>
      </FormGroup>
    </Form>
  );
};

const EditPage = () => {
  return (
    <>
      <PageLayout>
        <h1>Edit Notes</h1>
        <EditForm />
      </PageLayout>
    </>
  );
};

export default EditPage;
