import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useTheme } from "./ThemeContext";

// Props interface for ThemeProvider component
interface ThemeProviderProps {
  children: React.ReactNode;
}

// ThemeProvider component that wraps Material-UI ThemeProvider
// Applies dark or light theme based on context
export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Get current theme mode from context
  const { mode } = useTheme();

  // Create Material-UI theme based on current mode
  const theme = createTheme({
    // Set palette mode (light or dark)
    palette: {
      mode: mode,
      // Customize primary color
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2", // Light blue for dark mode, blue for light mode
      },
      // Customize secondary color
      secondary: {
        main: mode === "dark" ? "#f48fb1" : "#dc004e", // Pink for dark mode, red for light mode
      },
    },
    // Customize component default props and styles
    components: {
      // Global styles for MUI components
      MuiAppBar: {
        styleOverrides: {
          root: {
            // Ensure AppBar has proper background in both modes
            backgroundColor: mode === "dark" ? "#1e1e1e" : "#1976d2",
          },
        },
      },
    },
  });

  // Wrap children with Material-UI ThemeProvider and CssBaseline
  // CssBaseline provides consistent CSS reset across browsers
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

