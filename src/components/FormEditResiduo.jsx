import { useState } from "react";

export default function FormEditResiduo({ residuo }) {
  const [editEmpresa, setEditEmpresa] = useState(residuo.empresa);
  const [editCnpj, setEditCnpj] = useState(residuo.cnpj);
  const [editData, setEditData] = useState(residuo.dataColeta);
  const [editPeso, setEditPeso] = useState(residuo.peso);
  const [editTipo, setEditTipo] = useState(residuo.tipo);

  return (
    <form className="flex flex-col gap-4 w-[50%] p-10">
      <h1 className="font-bold text-2xl">Editar Resíduo</h1>
      <div>
        <label htmlFor="empresa">Empresa</label>
        <input
          value={editEmpresa}
          onChange={(event) => setEditEmpresa(event.target.value)}
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
          Editar Resíduo
        </button>
      </div>
    </form>
  );
}
