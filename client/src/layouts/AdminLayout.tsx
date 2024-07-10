import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Loading from "src/components/Loading";
import Sidebar from "src/components/Sidebar";
import { useLoading } from "src/contexts/loading";

function AdminLayout() {
  const { loading } = useLoading();
  console.log(loading);

  return (
    <>
      <Loading isShow={loading} />
      <Stack direction={"row"} gap={2}>
        <Sidebar />
        <Outlet />
      </Stack>
    </>
  );
}

export default AdminLayout;
