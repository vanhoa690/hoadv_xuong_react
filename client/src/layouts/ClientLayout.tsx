import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Loading from "src/components/Loading";
import { useCart } from "src/contexts/cart";
import { useLoading } from "src/contexts/loading";

function ClientLayout() {
  const { loading } = useLoading();
  const { cart, setCart } = useCart();
  console.log(cart);

  useEffect(() => {
    const cartStorage = localStorage.getItem("carts") || "[]";
    const carts = JSON.parse(cartStorage);
    setCart(carts.length);
  }, [setCart]);

  return (
    <>
      <Loading isShow={loading} />
      <Header />
      <Outlet />
    </>
  );
}

export default ClientLayout;
