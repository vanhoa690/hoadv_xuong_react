import Sidebar from "src/components/Sidebar";
import { Outlet } from "react-router-dom";
import { useLoading } from "src/contexts/loading";
import Loading from "src/components/Loading";

const AdminLayout = () => {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Loading />}
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
