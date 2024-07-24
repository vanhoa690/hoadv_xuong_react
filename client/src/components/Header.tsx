import { Badge, Box, Stack, styled, Typography } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCart } from "src/contexts/cart";
import { useMemo } from "react";

const menus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/shop",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const { cart } = useCart();
  // useMemo : return numberCart

  const quantiyCart = useMemo(() => {
    return cart
      ? cart.products.reduce((total, item) => total + item.quantity, 0)
      : 0;
  }, [cart]);

  return (
    <Wrapper
      sx={{ padding: "0 50px" }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <img src="/logo.svg" alt="logo" />
      <Stack direction={"row"} gap={"75px"}>
        {/* menu */}
        {menus.map((menu, index) => (
          <Link to={menu.link} key={index}>
            <Typography fontWeight={"500"}>{menu.label}</Typography>
          </Link>
        ))}
      </Stack>
      <Stack gap={"45px"} direction={"row"}>
        {/* icon  */}
        <img src="/user.svg" alt="user" />
        <SearchIcon />
        <FavoriteBorderIcon />
        <Badge badgeContent={quantiyCart} color="secondary">
          <img src="/cart.svg" alt="cart" />
        </Badge>
      </Stack>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Stack)({
  height: 100,
  padding: "0 50px",
});
