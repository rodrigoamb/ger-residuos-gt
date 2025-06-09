import { useEffect, useState } from "react";
import Table from "../components/Table";
import { fetchDataGet } from "../services/fetchDataGet";
import DrawerWrapper from "../components/DrawerWrapper";
import ModalDelete from "../components/ModalDelete";

export default function DashboardPage() {
  const [tableItems, setTableItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  async function getAllResiduos() {
    const response = await fetchDataGet();
    setTableItems(response);
  }

  useEffect(() => {
    getAllResiduos();
  }, []);

  return (
    <div className="py-10">
      <Table
        tableItems={tableItems}
        setOpen={setOpen}
        setOpenModalDelete={setOpenModalDelete}
        setItemToDelete={setItemToDelete}
      />

      <DrawerWrapper
        open={open}
        setOpen={setOpen}
        getAllResiduos={getAllResiduos}
      />
      <ModalDelete
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        itemToDelete={itemToDelete}
      />
    </div>
  );
}
