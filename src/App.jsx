import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Courses from "./Pages/CoursesPage";
import RootComponent from "./Pages/RootComponent";
import MainPage from "./Pages/MainPage";
import MainForm from "./Components/FormPage/MainForm";
import MainFormReferral from "./Components/FormPageReferral/MainForm"

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
      {
        path: "/form",
        element: <MainForm />,
      },
      {
        path:"/formreferral",
        element:<MainFormReferral/>
      }
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
