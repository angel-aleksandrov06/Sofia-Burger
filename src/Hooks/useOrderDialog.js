import { useState } from "react";

export function useOrderDialog() {
  const [openOrderDialog, setOpenOrderDialog] = useState(null);
  return {
    openOrderDialog,
    setOpenOrderDialog
  };
}
