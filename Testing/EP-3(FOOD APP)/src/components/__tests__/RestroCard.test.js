import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestroCard, { withNonVegLabel } from "../RestroCard";
import mock_data from "../mocks/resCardMock.json";
it("Should render restraunt card component", () => {
  render(<RestroCard resData={mock_data} />);
  let name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

it("Shoudld render with non veg label", () => {
  const NonVegRestroCard = withNonVegLabel(RestroCard);
  render(<NonVegRestroCard resData={mock_data} />);
  let name = screen.getByText("NON VEG");
  expect(name).toBeInTheDocument();
});
