const isPalindrome = (x) => {
  if (typeof x === "number") {
    x = Math.abs(x).toString();
  }
  if (!x || x.length > 10 || typeof x !== "string") return null;

  const reverse = x.split("").reverse().join("");
  return reverse.toLowerCase().trim() === x.toLowerCase().trim();
};

module.exports = isPalindrome;
