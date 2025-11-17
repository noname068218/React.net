import {
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Activiti } from "../../lib/types";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activiti[]>([]);

  useEffect(() => {
    // Use relative path - Vite proxy will forward to backend
    // This avoids SSL certificate issues in development
    axios
      .get<Activiti[]>("/api/activities")
      .then((response) => setActivities(response.data))
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });

    return () => {};
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
