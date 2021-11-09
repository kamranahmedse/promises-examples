function promiseThatFails() {
  return Promise.reject("Some error occurred");
}

// with try/catch
async function main() {
  try {
    const result = await promiseThatFails();
  } catch (e) {
    console.error(e);
  }
}

// with .catch
async function main2() {
  const result = await promiseThatFails().catch((err) => {
    // console.error(err);
    return "default";
  });

  console.log(result);
}

main();
// main2();
