import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import RestrauntMenu from "./components/RestrauntMenu";
import appStore from "./redux/appStore";
import UserContext from "./utils/UserContext";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Anjali",
    };
    setUserName(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          {/* <Body /> */}
          <Outlet />
          {/* <Footer /> */}
        </UserContext.Provider>
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restraunts/:resId",
        element: <RestrauntMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <PageNotFound />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
