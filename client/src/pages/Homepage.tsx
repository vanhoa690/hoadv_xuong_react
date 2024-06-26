import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Container, Stack } from "@mui/material";
import Loading from "../components/Loading";
import { Product } from "../types/Product";
import Flash from "../components/Flash";

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
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
      )}
    </>
  );
}

export default Homepage;
