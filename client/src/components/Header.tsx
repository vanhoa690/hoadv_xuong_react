import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "src/contexts/cart";
import { useEffect, useMemo } from "react";
import { Product } from "src/types/Product";
type Cart = {
  product: Product;
  quantity: number;
};

function Header() {
  const { cart, setCart } = useCart();
  const carts: Cart[] = useMemo(
    () => JSON.parse(localStorage.getItem("carts") || "[]"),
    []
  );

  useEffect(() => {
    setCart(carts.length);
  }, [carts]);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            <Stack gap={3} direction={"row"}>
              <Link to="/admin/product/list">
                <Button variant="outlined">Product List</Button>
              </Link>
              <Link to="/login">
                <Button variant="outlined">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="outlined">Register</Button>
              </Link>
              <Badge badgeContent={cart} color="error">
                <ShoppingCart sx={{ color: "blue" }} />
              </Badge>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
