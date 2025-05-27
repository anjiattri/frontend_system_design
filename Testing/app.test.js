const sortByAge = require("./app");

test("test if first person after sorting is avi", () => {
  const sortedData = sortByAge();
  expect(sortedData[0].name).toBe("avi");
});

test("test if the length after sorting is 4", () => {
  const sortedData = sortByAge();
  //   expect(sortedData.length).toBe(4);
  expect(sortedData).toHaveLength(4);
});

test("sorted data not be in null", () => {
  const sortedData = sortByAge();
  expect(sortedData).not.toBe(undefined);
});
