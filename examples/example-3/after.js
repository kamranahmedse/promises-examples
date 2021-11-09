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

async function getTodos() {
  const ids = [2, 5, 1];
  const todos = [];

  for (const id of ids) {
    todos.push(await fetchTodo(id));
  }

  return todos;
}

getTodos()
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
