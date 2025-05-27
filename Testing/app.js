const users = [
  {
    name: "anjali",
    age: 23,
  },
  {
    name: "nidhi",
    age: 21,
  },
  {
    name: "john",
    age: 12,
  },
  {
    name: "avi",
    age: 8,
  },
];

function sortByAge() {
  return users.sort((a, b) => a.age - b.age);
}
console.log(sortByAge());

module.exports = sortByAge;
