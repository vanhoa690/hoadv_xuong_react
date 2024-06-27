import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Loading from "../components/Loading";
import { Product } from "../types/Product";
import Flash from "../components/Flash";
import { Form, Field } from "react-final-form";

function Login() {
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

  const handleSubmit = async (values: any) => {
    console.log(values);
    await axios.post("http://localhost:3000/auth/login", values);
  };
  const validate = (values: any) => {
    const errors: any = {};
    const { username } = values;
    if (!username) errors.username = "Vui lòng nhập username";
    return errors;
  };
  return (
    <>
      <Container>
        <Typography variant="h2" mb={3}>
          Login
        </Typography>
        <Form
          onSubmit={handleSubmit}
          validate={validate}
          render={({ values }) => (
            <Stack maxWidth={"400px"} gap={3}>
              <Field<string> name="username">
                {({ input, meta }) => (
                  <TextField
                    autoComplete="off"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    label="Username"
                    {...input}
                  />
                )}
              </Field>
              <Field<string> name="email">
                {({ input }) => <TextField label="Email" {...input} />}
              </Field>
              <Field<string> name="password">
                {({ input }) => (
                  <TextField label="Password" {...input} type="password" />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                onClick={() => handleSubmit(values)}
              >
                Submit
              </Button>
            </Stack>
          )}
        />
      </Container>
    </>
  );
}

export default Login;
