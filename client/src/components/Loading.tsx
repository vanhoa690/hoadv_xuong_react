import { CircularProgress, Stack } from "@mui/material";

function Loading() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
      <CircularProgress />
    </Stack>
  );
}

export default Loading;
