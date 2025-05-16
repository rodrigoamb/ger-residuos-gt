import { useParams } from "react-router";
import { fetchDataGetById } from "../services/fetchDataGetById";
import { useEffect, useState } from "react";

export default function EditResiduosPage() {
  const [residuo, setResiduo] = useState(null);

  const { id } = useParams();

  async function getResiduoById() {
    const response = await fetchDataGetById(id);
    setResiduo(response);
  }

  useEffect(() => {
    getResiduoById();
  }, [id]);

  return (
    <div>
      <h1>Minha pagina de editar residuos do id {id}</h1>
      <p>{residuo?.empresa}</p>
      <p>{residuo?.cnpj}</p>
      <p>{residuo?.dataColeta}</p>
      <p>{residuo?.peso}</p>
      <p>{residuo?.tipo}</p>
    </div>
  );
}
