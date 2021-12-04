import * as React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, Typography, Box } from "@material-ui/core";
import Gazzal from "./gazall";
import Nazmm from "./nazmm";
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

export default function BasicTabs({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("tabdata" , data)
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
            lineHeight: 2.5,
            wordSpacing: "1px",
            fontFamily: "Noto Nastaliq Urdu",
          }}
        >
          {data?.detail}
        </p>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            textAlign: "justify",
            padding: "2px",
            margin: "4px",
            color: "grey",
          }}
        >
          <Gazzal gazzal={data?.gazzal} />
        </p>
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            textAlign: "justify",
            padding: "2px",
            margin: "4px",
            color: "grey",
          }}
        >
          <Nazmm nazm={data?.nazm} />
        </p>
      </TabPanel>
    </Box>
  );
}
