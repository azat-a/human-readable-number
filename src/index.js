module.exports = function toReadable (number) {
  let ones = {
    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
  }
  let teens = {
    "1": "eleven",
    "2": "twelve",
    "3": "thirteen",
    "4": "fourteen",
    "5": "fifteen",
    "6": "sixteen",
    "7": "seventeen",
    "8": "eighteen",
    "9": "nineteen",
  }
  let tens = {
    "0": "",
    "1": "ten",
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety",
  }

  if (number === 0)
    return "zero";
  if (number === 10)
    return "ten";
  if (number === 100)
    return "one hundred";

  let n = number;
  let digits = {};
  digits.third = n % 10;
  n = (n - n % 10) / 10;
  digits.second = n % 10;
  n = (n - n % 10) / 10;
  digits.first = n % 10;

  let readableString = "";
  if (digits.second === 1 && digits.third === 0)
    readableString = tens["1"];

  if (digits.second === 1 && digits.third > 0)
    readableString = teens[String(digits.third)];

  if (digits.second > 1 && digits.third === 0)
    readableString = tens[String(digits.second)];

  if (digits.second === 0 && digits.third > 0)
    readableString = ones[String(digits.third)];
  
  if (digits.second > 1 && digits.third > 0)
    readableString = `${tens[String(digits.second)]} ${ones[String(digits.third)]}`;
  
  if (digits.first > 0 && digits.second === 0 && digits.third === 0)
    readableString = `${ones[String(digits.first)]} hundred`;

  if (digits.first > 0 && (digits.second > 0 || digits.third > 0))
    readableString = `${ones[String(digits.first)]} hundred ${readableString}`;

  return readableString;
}
