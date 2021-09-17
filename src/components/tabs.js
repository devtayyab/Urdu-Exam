import * as React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, Typography, Box } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Ghazal" {...a11yProps(1)} />
          <Tab label="Nazam" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p
          style={{
            textAlign: "justify",
            padding: "2px",
            margin: "4px",
            color: "grey",
          }}
        >
          The humorous poetry of prominent Urdu satirist Dilawar Figar
          (1929-1998) first became known when at a Mushaira in Badayun where
          Dilip Kumar was also present, Shakil Badayuni, who was compering,
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p
         style={{
            textAlign: "justify",
            padding: "2px",
            margin: "4px",
            color: "grey",
          }}
        >
          kyā kahūñ us se ki jo baat samajhtā hī nahīñ vo to milne ko mulāqāt
          samajhtā hī nahīñ{" "}
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p
        style={{
            textAlign: "justify",
            padding: "2px",
            margin: "4px",
            color: "grey"
        }}
        >
          Playfulness is a typical quality of the beloved and it makes her all
          the more romantic and appealing. In other words, a beloved without
          some amount of coquetry or playfulness would not be so romantic. You
          may like to go through these examples that personify a beloved as one
          who is now bouncy, now mischievous, now playful, and now full of light
          wit.
        </p>
      </TabPanel>
    </Box>
  );
}
