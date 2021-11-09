// noinspection ES6MissingAwait

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

// .map, .forEach, .reduce etc have all different behavior
async function getTodos() {
  const ids = [2, 5, 1];
  const todos = [];

  ids.forEach(async (id) => {
    todos.push(await fetchTodo(id));
  });

  return todos;
}

getTodos()
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
