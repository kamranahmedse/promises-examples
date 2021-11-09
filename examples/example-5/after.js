const fetch = require("node-fetch");

function fetchTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusText);
    })
    .catch((err) => console.error(err));
}

// If await is the last statement, you don't need
function getTodoById(id) {
  return fetchTodo(id);
}

(async () => {
  console.log(await getTodoById(5));
})();
