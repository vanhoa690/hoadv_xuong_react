import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "src/components/ProductCard";
import { Container, Stack } from "@mui/material";
import { Product } from "src/types/Product";
import Flash from "src/components/Flash";
import { useLoading } from "src/contexts/loading";

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { setLoading } = useLoading();
  const [flash, setFlash] = useState<Boolean>(false);

  const getAllProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
      setFlash(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      {flash && <Flash type="error" message="Something errors ..." />}
      <Container>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={3}
          alignContent={"center"}
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default Homepage;
