const isPalindrome = (x) => {
  if (!x) return null;
  if (x.length > 10) return null;
  if (typeof x === "number") {
    x = Math.abs(x).toString();
  }
  if (typeof x !== "string") return null;

  const reverse = x.split("").reverse().join("");
  return reverse.toLowerCase().trim() === x.toLowerCase().trim();
};

module.exports = isPalindrome;
