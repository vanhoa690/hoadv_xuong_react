import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Loading from "src/components/Loading";
import { useCart } from "src/contexts/cart";
import { useLoading } from "src/contexts/loading";

function ClientLayout() {
  const { loading } = useLoading();
  const { setCart } = useCart();

  const getAllCarts = async () => {
    try {
      const userStorage = localStorage.getItem("user") || "{}";
      const userId = JSON.parse(userStorage)?._id;
      console.log(userId);
      
      if (!userId) return;
      const { data } = await axios.get(`/carts/user/${userId}`);
      setCart(data.products.length); // product * quantity
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
