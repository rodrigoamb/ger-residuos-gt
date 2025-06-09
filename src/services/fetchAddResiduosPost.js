export async function fetchAddResiduosPost(dados) {
  const response = await fetch("http://localhost:3000/residuos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao adicionar os residuos");
  }

  const data = await response.json();

  return data;
}
