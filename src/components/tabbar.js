import * as React from "react";
import { Box } from "@material-ui/core";
import { BottomNavigation, Paper } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import { Link } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
    style={{
      marginTop:60,
    }}
    >
      <Paper
        style={{
          position: "fixed",
          bottom: 0,

          width: "100%",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/">
            <BottomNavigationAction
              label="Home"
              icon={<HomeOutlinedIcon />}
            ></BottomNavigationAction>
          </Link>
          <Link to="/contact">
            <BottomNavigationAction
              label="ContactUs"
              icon={<PermContactCalendarOutlinedIcon />}
            ></BottomNavigationAction>
          </Link>
          <Link to="/">
            <BottomNavigationAction
              label="Search"
              icon={<SearchOutlined />}
            ></BottomNavigationAction>
          </Link>
          <Link to="/about">
            <BottomNavigationAction
              label="About"
              icon={<AccountCircleOutlinedIcon />}
            ></BottomNavigationAction>
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
