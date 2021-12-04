import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function Nazamm() {
   const nazzms = [1,3,5,7,9,4]
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
    {nazzms.map((v, i) => (
      <div>
        <ListItem button>
          <ListItemText primary={v} />
        </ListItem>
        <Divider />
      </div>
    ))}
  </List>
  );
}
