import { useState } from "react";
import { fetchAddResiduosPost } from "../services/fetchAddResiduosPost";

export default function FormAddResiduos({ setOpen }) {
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [data, setData] = useState("");
  const [peso, setPeso] = useState("");
  const [tipo, setTipo] = useState("");

  async function handleSubmitAddResiduo(event) {
    event.preventDefault();

    const dados = {
      empresa,
      cnpj,
      dataColeta: data,
      peso,
      tipo,
    };

    const resposta = await fetchAddResiduosPost(dados);
    if (resposta) {
      setEmpresa("");
      setCnpj("");
      setData("");
      setPeso("");
      setTipo("");
      setOpen(false);
    }
  }

  return (
    <form onSubmit={handleSubmitAddResiduo} className="flex flex-col gap-4">
      <div>
        <label htmlFor="empresa">Empresa</label>
        <input
          value={empresa}
          onChange={(event) => setEmpresa(event.target.value)}
          className="block border-1 rounded-md w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          type="text"
          name="empresa"
          id="empresa"
          placeholder="Digite o nome da empresa"
          required
        />
      </div>

      <div>
        <label htmlFor="cnpj">Cnpj da empresa</label>
        <input
          value={cnpj}
          onChange={(event) => setCnpj(event.target.value)}
          className="block border-1 rounded-md w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          type="text"
          name="cnpj"
          id="cnpj"
          placeholder="Digite o cnpj da empresa"
          required
        />
      </div>

      <div>
        <label htmlFor="dataColeta">Data da coleta</label>
        <input
          value={data}
          onChange={(event) => setData(event.target.value)}
          className="block border-1 rounded-md w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          type="date"
          name="dataColeta"
          id="dataColeta"
          required
        />
      </div>

      <div>
        <label htmlFor="peso">Peso do resíduo</label>
        <input
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
          className="block border-1 rounded-md w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          type="number"
          name="peso"
          id="peso"
          placeholder="Digite o peso do resíduo"
          required
        />
      </div>

      <div>
        <label htmlFor="tipo">Tipo do resíduo</label>
        <input
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
          className="block border-1 rounded-md w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          type="text"
          name="tipo"
          id="tipo"
          placeholder="Digite o tipo do resíduo"
          required
        />
      </div>

      <div className="flex flex-row-reverse w-full">
        <button
          className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          type="submit"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}
