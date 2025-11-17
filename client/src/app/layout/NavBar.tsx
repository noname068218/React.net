import { Brightness4, Brightness7, Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "../theme/ThemeContext";

// NavBar component with menu button, login button, and theme toggle
export default function NavBar() {
  // Get theme mode and toggle function from context
  const { mode, toggleTheme } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <MenuItem sx={{ display: "flex", gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight="bold">
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Activities
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                About
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Contact
              </MenuItem>
            </Box>
            <Button size="large" variant="contained" color="warning">
              Create Activity
            </Button>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              aria-label="toggle theme"
              sx={{ ml: 1 }}
            >
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
