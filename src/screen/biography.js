import { Avatar, Checkbox } from "@material-ui/core";
import * as React from "react";
import { FavoriteBorder } from "@material-ui/icons";
import imag from "../images/logo.png";
import Favorite from "@material-ui/icons/Favorite";
import BasicTabs from "../components/tabs";
import SimpleBottomNavigation from "../components/tabbar";
export const Biography = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Avatar
            src={imag}
            alt="name"
            style={{
              width: "150px",
              height: "150px",
            }}
          ></Avatar>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h3>HASRAT MOHANI</h3>
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </div>
          <p
            style={{
              fontFamily: "serif",
              fontSize: "10px",
            }}
          >
            1917-1922 || Delhi
          </p>
        </div>
      </div>
      <div>
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
      </div>
      <BasicTabs></BasicTabs>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
};
