//palindrome check
//isPalindrome()
const isPalindrome = require("./tdd");
//abc -> false
test("/abc", () => {
  const result = isPalindrome("abc");
  expect(result).toBe(false);
});
//aba -> true
test("/aba", () => {
  const result = isPalindrome("aba");
  expect(result).toBe(true);
});
//no input -> null
test("/no input ", () => {
  const result = isPalindrome();
  expect(result).toBe(null);
});
//null ->  null
test("/null ", () => {
  const result = isPalindrome(null);
  expect(result).toBe(null);
});
// single char like a ->always true
test("/single char like a ", () => {
  const result = isPalindrome("a");
  expect(result).toBe(true);
});
// 123 -> false
test("/123 ", () => {
  const result = isPalindrome(123);
  expect(result).toBe(false);
});
// 121 -> true
test("/121 ", () => {
  const result = isPalindrome(121);
  expect(result).toBe(true);
});
// -121 negative number -> true
test("/-121 negative number ", () => {
  const result = isPalindrome(-121);
  expect(result).toBe(true);
});
//Boolean, {}, [],()=>{} -> null (anything apart from number and string return null)
test("/Boolean, {}, [],()=>{} ", () => {
  const result = isPalindrome(true);
  expect(result).toBe(null);
});
//Aba ->true(case sensitive)
test("/Aba ", () => {
  const result = isPalindrome("Aba");
  expect(result).toBe(true);
});
//"   aba   " -> true(trim white spaces)
test("/  aba   ", () => {
  const result = isPalindrome("    aba   ");
  expect(result).toBe(true);
});
//  length -> length>10 return null

test("/length >10", () => {
  const result = isPalindrome("abbbbbbbbba");
  expect(result).toBe(null);
});
//  multiple inputs -> ignore the rest

test("/multiple inputs ", () => {
  const result = isPalindrome("aba", "abr");
  expect(result).toBe(true);
});
