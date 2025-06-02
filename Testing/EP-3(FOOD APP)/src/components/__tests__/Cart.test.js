import { fireEvent, render, screen } from "@testing-library/react";
import RestrauntMenu from "../RestrauntMenu";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import mock_data from "../mocks/menuCardData.json";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mock_data),
  });
});
it("Should load restraunt menu component of pizza", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const Recommended = screen.getByText("Recommended(20)");
  fireEvent.click(Recommended);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  const cartItem = screen.getByText("Cart(1 items)");
  expect(cartItem).toBeInTheDocument();
});
