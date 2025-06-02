import { sum } from "./sum";

test("sum should calculate sum of two numbers", () => {
  const result = sum(2, 3);
  //known as assertion
  expect(result).toBe(5);
});
