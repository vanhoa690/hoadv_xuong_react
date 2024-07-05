import { Outlet } from "react-router-dom";
import Header from "src/components/Header";

function ClientLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default ClientLayout;
