import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Container, Stack, TextField } from "@mui/material";
import Loading from "../components/Loading";
import { Product } from "../types/Product";
import Flash from "../components/Flash";

function Register() {
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
      <Container>
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
      </Container>
    </>
  );
}

export default Register;
