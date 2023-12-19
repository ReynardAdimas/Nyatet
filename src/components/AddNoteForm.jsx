import React from 'react';
import { Form, FormGroup, Label, Input, TextArea } from '../components/ui/Forms';
import Button from './ui/button';

const AddNoteForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" name="title" />
      </FormGroup>
      <FormGroup>
        <Label>Note</Label>
        <TextArea name="note" rows="12" />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Add</Button>
      </FormGroup>
    </Form>
  );
};

export default AddNoteForm;