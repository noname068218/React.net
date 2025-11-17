import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/layout/App.tsx";
import "./app/layout/index.css";
import { ThemeContextProvider } from "./app/theme/ThemeContext";
import ThemeProvider from "./app/theme/ThemeProvider";

// Wrap app with theme providers
// ThemeContextProvider manages theme state and localStorage
// ThemeProvider applies Material-UI theme based on context
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </StrictMode>
);
