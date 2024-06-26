import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

type FlashProps = {
  message: string;
  type: "success" | "info" | "warning" | "error";
};
function Flash({ message, type }: FlashProps) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
      open={open}
      onClose={handleClose}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
}

export default Flash;
