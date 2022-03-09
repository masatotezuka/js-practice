const url = "https://jsonplaceholder.typicode.com/todos";

(async () => {
  const json = await fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });
  console.log(json);
})();
