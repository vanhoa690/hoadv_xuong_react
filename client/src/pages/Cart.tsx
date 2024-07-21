import {
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Banner from "src/components/Banner";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "src/contexts/cart";
import { useProductCart } from "src/hooks/useProductCart";

const labels = ["Product", "Price", "Quantity", "Subtotal", ""];
function Cart() {
  const { cart } = useCart();
  const { removeToCart } = useProductCart();

  return (
    <>
      <Banner />
      {/* Tieu de */}
      <Container>
        <Wrapper>
          <LabelWrapper
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            {labels.map((label, index) => (
              <Typography fontWeight={500} key={index}>
                {label}
              </Typography>
            ))}
          </LabelWrapper>
          {/* Cart Item */}
          {cart?.products.map((item, index) => (
            <Stack
              key={index}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} gap={4}>
                <img src="./product.png" />
                <Typography fontWeight={500}>
                  {item.product.title.substring(0, 10)}...
                </Typography>
              </Stack>

              <Typography fontWeight={500}>{item.product.price}đ</Typography>
              <Typography fontWeight={500}>{item.quantity}</Typography>
              <Typography fontWeight={500}>25.000.000đ</Typography>
              <IconButton onClick={() => removeToCart(item.product._id)}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          ))}
        </Wrapper>
      </Container>
    </>
  );
}

export default Cart;

const Wrapper = styled(Stack)({
  paddingTop: 72,
});

const LabelWrapper = styled(Stack)(({ theme }) => ({
  background: "#F9F1E7",
  height: 55,
}));
