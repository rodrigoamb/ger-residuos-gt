import { useNavigate } from "react-router";

export default function Table({
  tableItems,
  setOpen,
  setOpenModalDelete,
  setItemToDelete,
}) {
  const navigate = useNavigate();

  function handleOpenDrawer() {
    setOpen(true);
  }

  function handleOpenModalDelete(item) {
    setItemToDelete(item);
    setOpenModalDelete(true);
  }

  function handleNavigateToEdit(id) {
    navigate(`/editar-residuo/${id}`);
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Gerenciador de Resíduos feito no GT
          </h3>
          <p className="text-gray-600 mt-2">
            Acompanhe, adicione, edite e remova os resíduos.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={handleOpenDrawer}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Adicionar Resíduo
          </button>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Empresa</th>
              <th className="py-3 px-6">Cnpj</th>
              <th className="py-3 px-6">Data da Coleta</th>
              <th className="py-3 px-6">Peso</th>
              <th className="py-3 px-6">Tipo</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.empresa}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cnpj}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.dataColeta}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.peso}kg</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.tipo}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={() => handleNavigateToEdit(item.id)}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleOpenModalDelete(item)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
