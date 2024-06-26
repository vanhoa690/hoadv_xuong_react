import { Outlet } from "react-router-dom";
import Header from "src/components/Header";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ClientLayout;
