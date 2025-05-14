import { useEffect, useState } from "react";
import Table from "./components/Table";
import { fetchDataGet } from "./services/fetchDataGet";
import DrawerWrapper from "./components/DrawerWrapper";

export default function App() {
  const [tableItems, setTableItems] = useState([]);
  const [open, setOpen] = useState(false);

  async function getAllResiduos() {
    const response = await fetchDataGet();
    setTableItems(response);
  }

  useEffect(() => {
    getAllResiduos();
  }, []);

  return (
    <div className="py-10">
      <Table tableItems={tableItems} setOpen={setOpen} />

      <DrawerWrapper open={open} setOpen={setOpen} />
    </div>
  );
}
