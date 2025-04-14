import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Courses from "./Pages/CoursesPage";
import RootComponent from "./Pages/RootComponent";
import MainPage from "./Pages/MainPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/courses/:courseId",
        element: <Courses />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
