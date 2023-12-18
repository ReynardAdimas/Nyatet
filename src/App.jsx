import React from "react";
import Homepage from "./pages/home";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
  {
    path: "/edit",
    element: <EditPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
