import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { TodoProvider } from "./context/TodoContext.tsx";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
      <Toaster position='bottom-right' />
    </TodoProvider>
  </React.StrictMode>
);
