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
  const [todo1, todo5, todo2] = await Promise.all([
    fetchTodo(1),
    fetchTodo(5),
    fetchTodo(2),
  ]);

  return [todo1, todo5, todo2];
}

getTodos()
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
