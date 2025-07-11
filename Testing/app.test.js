const sortByAge = require("./app");

test("test if first person after sorting is avi", () => {
  const sortedData = sortByAge();
  expect(sortedData[0].name).toBe("avi");
});

test("test if last person after sorting is anjali", () => {
  const sortedData = sortByAge();
  expect(sortedData[sortedData.length - 1].name).toBe("anjali");
});

test("test if the length after sorting is 4", () => {
  const sortedData = sortByAge();
  //   expect(sortedData.length).toBe(4);
  expect(sortedData).toHaveLength(4);
});

test("sorted data not be in null", () => {
  const sortedData = sortByAge();
  expect(sortedData).not.toBeUndefined(undefined);

  // expect(sortedData).not.toBe(undefined);
});
