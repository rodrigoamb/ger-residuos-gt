export default function FormAddResiduos() {
  return (
    <form>
      <div>
        <label htmlFor="empresa">Empresa</label>
        <input
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

      <div>
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
}
