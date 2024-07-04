import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { Category } from "src/types/Product";

type ProductForm = {
  title: string;
  isShow: boolean;
};
function AdminProductAdd() {
  const nav = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleSubmit = async (values: ProductForm) => {
    console.log(values);
    await axios.post("http://localhost:3000/products", values);
    nav("/admin/product/list");
  };
  const validate = (values: ProductForm) => {
    const errors: Partial<ProductForm> = {};
    const { title } = values;
    if (!title) errors.title = "Vui lòng nhập title";
    return errors;
  };
  return (
    <>
      <Container>
        <Typography variant="h2" mb={3}>
          Add product
        </Typography>
        <Form
          onSubmit={handleSubmit}
          validate={validate}
          initialValues={{ isShow: true }}
          render={({ values }) => (
            <Stack maxWidth={"400px"} gap={3}>
              <Field<string> name="title">
                {({ input, meta }) => (
                  <TextField
                    autoComplete="off"
                    error={!!(meta.touched && meta.error)}
                    helperText={meta.touched && meta.error}
                    label="title"
                    {...input}
                  />
                )}
              </Field>
              <Field<string> name="price">
                {({ input }) => <TextField label="price" {...input} type="number" />}
              </Field>
              <Field<string> name="description">
                {({ input }) => <TextField label="description" {...input} />}
              </Field>
              <Field<string> name="image">
                {({ input }) => <TextField label="image" {...input} />}
              </Field>
              <Field<boolean> name="isShow" type="checkbox">
                {({ input }) => (
                  <FormControlLabel
                    control={<Checkbox {...input} />}
                    label="Show Product"
                  />
                )}
              </Field>
              <Field<string> name="category">
                {({ input }) => (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select label="Category" {...input}>
                      {categories.map((category, index) => (
                        <MenuItem key={index} value={category._id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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

export default AdminProductAdd;
