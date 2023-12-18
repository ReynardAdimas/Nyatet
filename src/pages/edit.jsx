import React from "react";
import PageLayout from "../layouts/pageLayouts";
const EditForm = () => {
  return (
    <>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Note:
          <textarea name="note" />
        </label>
        <button type="submit">Save</button>
        <button type="submit">Delete</button>
      </form>
    </>
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
