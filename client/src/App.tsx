import {useEffect, useState} from 'react';
import type {Activiti} from './lib/types';
import {List, ListItem, ListItemText} from '@mui/material';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState<Activiti[]>([]);

  useEffect(() => {
    axios.get<Activiti[]>('https://localhost:5001/api/activities').then((response) => setActivities(response.data));

    return () => {};
  }, []);

  return (
    <>
      <h3 className='app'>Reactivities</h3>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
