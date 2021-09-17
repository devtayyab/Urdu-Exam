import * as React from 'react';
import {Box} from '@material-ui/core';
import {BottomNavigation} from '@material-ui/core';
import {BottomNavigationAction} from '@material-ui/core';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// // import LocationOnIcon from '@material-ui/icons/Location';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Search"  />
        <BottomNavigationAction label="ContactUs"  />
        <BottomNavigationAction label="About Us"  />
      </BottomNavigation>
    </Box>
  );
}
