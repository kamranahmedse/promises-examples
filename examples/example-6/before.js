function promiseThatFails() {
  return Promise.reject("Some error occurred");
}

// Error handling
function main() {
  promiseThatFails()
    .then(() => console.log("never to be called"))
    .catch((err) => console.error(err));
}

main();
