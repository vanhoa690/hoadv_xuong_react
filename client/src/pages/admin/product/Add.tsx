import { Container, Stack, TextField, Typography } from "@mui/material";

function AdminProductAdd() {
  return (
    <>
      <Container>
        <Stack gap={2}>
          <Typography variant="h3" textAlign={"center"}>
            Add Product
          </Typography>
          <form>
            <TextField
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="standard"
            />
          </form>
        </Stack>
      </Container>
    </>
  );
}

export default AdminProductAdd;
