import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Stack, Typography } from "@mui/material";
import Loading from "src/components/Loading";
import { Product } from "src/types/Product";
import Flash from "src/components/Flash";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [flash, setFlash] = useState<Boolean>(false);

  const getProductDetail = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      setProduct(data);
    } catch (error) {
      console.log(error);
      setFlash(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    getProductDetail(id);
  }, [id]);

  if (!product) return <Typography>Not Found Product</Typography>;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {flash && <Flash type="error" message="Something errors ..." />}
          <Container>
            <Stack direction={"row"} gap={3} alignContent={"center"}>
              <img src={product.image} width={"450px"} />
              <Stack gap={2}>
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Typography variant="h5" color={"red"}>
                  Price: {product.price} USD
                </Typography>
                <Typography variant="h5">
                  Category: {product.category}
                </Typography>
                <Typography variant="h5">Votes:</Typography>
                <Stack>
                  <Typography variant="caption">
                    Count: {product.rating.count} rates
                  </Typography>
                  <Typography variant="caption">
                    Rate: {product.rating.rate}
                  </Typography>
                </Stack>
                <Button variant="outlined">Add to Cart</Button>
              </Stack>
            </Stack>
          </Container>
        </>
      )}
    </>
  );
}

export default ProductDetail;
