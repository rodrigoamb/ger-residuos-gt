export async function fetchDataGet() {
  const response = await fetch("http://localhost:3001/residuos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao buscar os residuos");
  }

  const data = await response.json();

  console.log(data);
}
