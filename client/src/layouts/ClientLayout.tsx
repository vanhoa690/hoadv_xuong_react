import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Loading from "src/components/Loading";
import { useCart } from "src/contexts/cart";
import { useLoading } from "src/contexts/loading";
import { useUser } from "src/contexts/user";
import { User } from "src/types/User";

function ClientLayout() {
  const { loading } = useLoading();
  const { setCart } = useCart();
  const { setUser } = useUser();

  const getAllCarts = async () => {
    try {
      const userStorage = localStorage.getItem("user") || "{}";
      const user: User = JSON.parse(userStorage);
      setUser(user);
      const userId = user?._id;
      console.log({ userId });
      if (!userId) return;
      const { data } = await axios.get(`/carts/user/${userId}`);
      console.log(data);
      setCart(data);
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
