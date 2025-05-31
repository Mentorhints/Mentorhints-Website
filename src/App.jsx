import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Courses from "./Pages/CoursesPage";
import RootComponent from "./Pages/RootComponent";
import MainPage from "./Pages/MainPage";
import MainForm from "./Components/FormPage/MainForm";
import MainFormReferral from "./Components/FormPageReferral/MainFormReferral";
import About from "./Pages/About";
import PrivacyPolicy from "./Components/FooterRedesign/PrivacyPolicy";
import TermsCondition from "./Components/FooterRedesign/TermsCondition";

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
        path: "/referralform",
        element: <MainFormReferral />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "termsandcondition",
        element: <TermsCondition />,
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
