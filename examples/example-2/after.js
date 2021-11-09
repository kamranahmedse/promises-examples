async function getSum(num1, num2) {
  return num1 + num2;
}

// Promise
console.log(getSum(1, 2));

// Promise based result
getSum(1, 2)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// Async/await example
(async () => {
  console.log(await getSum(1, 2));
})();
