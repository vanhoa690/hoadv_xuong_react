import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Loading from "src/components/Loading";
import { useLoading } from "src/contexts/loading";

const ClientLayout = () => {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Loading />}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ClientLayout;
