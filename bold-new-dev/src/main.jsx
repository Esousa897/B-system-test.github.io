// In je entrypoint (bv. main.jsx)
import React from "react";
import { createRoot } from "react-dom/client";
import ShopifyApp from "./App";

const container = document.getElementById("react-mount");
if (container) {
  createRoot(container).render(<ShopifyApp />);
}