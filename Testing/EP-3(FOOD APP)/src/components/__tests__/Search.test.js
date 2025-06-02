import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import mock_data from "../mocks/mockrestroList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
//jsdom doesnt have fetch api thats why we need to mock
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mock_data),
  });
});

it("should render the body component with search button and search pizza restraunts", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardbeforesearch = screen.getAllByTestId("resCard");
  expect(cardbeforesearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "search" });

  const inputBox = screen.getByTestId("searchInput");
  fireEvent.change(inputBox, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  //screen should load 2 cards
  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(2);
});

it("should find all the top rated restraunts", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topratedbutton = screen.getByRole("button", {
    name: "Top Rated Restraunts",
  });

  fireEvent.click(topratedbutton);

  //screen should load 4 cards
  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(4);
});
