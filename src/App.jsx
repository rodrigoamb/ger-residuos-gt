import { useEffect, useState } from "react";
import Table from "./components/Table";
import { fetchDataGet } from "./services/fetchDataGet";

export default function App() {
  const [tableItems, setTableItems] = useState([]);

  async function getAllResiduos() {
    const response = await fetchDataGet();
    setTableItems(response);
  }

  useEffect(() => {
    getAllResiduos();
  }, []);

  return (
    <div className="py-10">
      <Table tableItems={tableItems} />
    </div>
  );
}
