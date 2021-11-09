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

// Multiple awaits: Each await is going to stop the execution
async function getTodos() {
  const todo1 = await fetchTodo(1);
  const todo5 = await fetchTodo(5);
  const todo2 = await fetchTodo(2);

  return [todo1, todo5, todo2];
}

getTodos()
  .then((todos) => console.log(todos))
  .catch((err) => console.error(err));
