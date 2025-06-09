export async function fetchDeleteResiduo(id) {
  const response = await fetch(`http://localhost:3000/residuos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Houve um erro ao deletar o residuo");
  }

  const data = await response.json();

  return data;
}
