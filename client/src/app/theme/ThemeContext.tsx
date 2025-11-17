import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Type definition for theme mode
type ThemeMode = "light" | "dark";

// Interface for theme context value
interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

// Create theme context with undefined as default (will be provided by ThemeProvider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use theme context
// Throws error if used outside ThemeProvider
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Props interface for ThemeContextProvider
interface ThemeContextProviderProps {
  children: ReactNode;
}

// Provider component that manages theme state
export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // Initialize theme from localStorage or default to 'light'
  // localStorage stores user's preference across sessions
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
    return savedMode || "light";
  });

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Provide theme context value to children components
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
