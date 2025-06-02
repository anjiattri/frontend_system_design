import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("should load header component with login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button", { name: "Login" });
  //   const login = screen.getByText("Login");
  expect(login).toBeInTheDocument();
});

it("should load header component with cart with 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart(0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("should load header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button", { name: "Login" });
  fireEvent.click(login);
  const logout = screen.getByRole("button", { name: "Logout" });
  expect(logout).toBeInTheDocument();
});
