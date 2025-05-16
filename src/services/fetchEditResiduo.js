export async function fetchEditResiduo(id, dados) {
  const response = await fetch(`http://localhost:3001/residuos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao editar o residuo");
  }

  const data = await response.json();

  return data;
}
