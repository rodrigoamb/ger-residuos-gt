import { useEffect } from "react";
import Table from "./components/Table";
import { fetchDataGet } from "./services/fetchDataGet";

export default function App() {
  useEffect(() => {
    fetchDataGet();
  }, []);

  const tableItems = [];

  return (
    <div className="py-10">
      <Table tableItems={tableItems} />
    </div>
  );
}
