const fetch = require("node-fetch");

async function getTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}

////////////////////////////
// Usage via promises
////////////////////////////
getTodo(2)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

////////////////////////////
// Usage via async/await
////////////////////////////
(async () => {
  console.log(await getTodo(2));
})();
