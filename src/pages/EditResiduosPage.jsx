import { useParams } from "react-router";
import { fetchDataGetById } from "../services/fetchDataGetById";
import { useEffect, useState } from "react";
import FormEditResiduo from "../components/FormEditResiduo";

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
      <FormEditResiduo residuo={residuo} />
    </div>
  );
}
