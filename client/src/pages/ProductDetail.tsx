import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Container, Stack } from "@mui/material";
import Loading from "../components/Loading";
import { Product } from "../types/Product";
import Flash from "../components/Flash";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
\          {flash && <Flash type="error" message="Something errors ..." />}
          <Container>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              gap={3}
              alignContent={"center"}
            >
              {product && <ProductCard product={product} />}
            </Stack>
          </Container>
        </>
      )}
    </>
  );
}

export default ProductDetail;
