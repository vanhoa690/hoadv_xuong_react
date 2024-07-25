import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Loading from "src/components/Loading";
import { useLoading } from "src/contexts/loading";
import { useUser } from "src/contexts/user";
import { useProductCart } from "src/hooks/useProductCart";
import { User } from "src/types/User";

function ClientLayout() {
  const { loading } = useLoading();
  const { setUser } = useUser();
  const { getCartUser } = useProductCart();

  const getAllCarts = async () => {
    try {
      const userStorage = localStorage.getItem("user") || "{}";
      const user: User = JSON.parse(userStorage);
      setUser(user);
      console.log(user);
      
      const userId = user?._id;
      console.log({ userId });
      // if (!userId) return;
      getCartUser();
    } catch (error) {}
  };

  useEffect(() => {
    getAllCarts();
  }, []);

  return (
    <>
      <Loading isShow={loading} />
      <Header />
      <Outlet />
    </>
  );
}

export default ClientLayout;
