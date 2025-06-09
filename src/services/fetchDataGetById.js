export async function fetchDataGetById(id) {
  const response = await fetch(`http://localhost:3000/residuos/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao buscar o resíduo específico");
  }

  const data = await response.json();

  return data;
}
