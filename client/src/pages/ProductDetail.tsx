import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartItem, Product } from "src/types/Product";
import {
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Loading from "src/components/Loading";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useProductCart } from "src/hooks/useProductCart";

function ProductDetail() {
  const { addToCart } = useProductCart();

  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();
  const [quantity, setQuantity] = useState<number>(0);

  const getProduct = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  const handleAddToCart = (product: Product) => {
    if (quantity <= 0) return;
    addToCart({ product, quantity });
  };
  return (
    <>
      <Loading isShow={loading} />
      <Container>
        {product && (
          <Stack direction={"row"} gap={3}>
            <img src={product.image} alt="" width={"500px"} />
            <Stack gap={3}>
              <Typography component="h1" fontSize={"26px"}>
                {product.title}
              </Typography>
              <Typography fontWeight={"bold"} color={"Highlight"}>
                ${product.price}
              </Typography>
              <Typography fontSize={"20px"}>
                Category: {product.category.name}
              </Typography>
              <Stack direction={"row"} gap={2} alignItems={"center"}>
                <Typography>Quantity: </Typography>
                <IconButton
                  onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
                >
                  <RemoveIcon />
                </IconButton>
                <TextField
                  id="outlined-basic"
                  label="quantity"
                  variant="outlined"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <IconButton onClick={() => setQuantity(quantity + 1)}>
                  <AddIcon />
                </IconButton>
              </Stack>
              <Typography>{product.description}</Typography>
              <Button
                variant="outlined"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
}

export default ProductDetail;
