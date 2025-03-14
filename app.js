import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/components/Header";
import RestaurentList from "./src/components/RestaurentList";
import Contact from "./src/components/Contact";
// import About from "./src/components/About";
import RestaurentMenu from "./src/components/RestaurentMenu";

const About = lazy(() => import("./src/components/About"))

const AppComonent = () => (
  <div className="AppComponent">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/", // This is the skeleton
    element: <AppComonent />,
    children: [
      {
        path: "/",
        element: <RestaurentList />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
