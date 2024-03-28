const fetchGreeting = async () => {
  const res = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "query { greeting }",
    }),
  });

  const { data } = await res.json();

  return data;
};

fetchGreeting()
  .then(({ greeting }) => {
    document.getElementById("greeting").textContent = greeting;
  })
  .catch((err) => console.error(err));
