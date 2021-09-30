import { Avatar, Checkbox } from "@material-ui/core";
import * as React from "react";
import { Route, useParams } from "react-router-dom";
import { FavoriteBorder } from "@material-ui/icons";
import imag from "../images/logo.png";
import Favorite from "@material-ui/icons/Favorite";
import BasicTabs from "../components/tabs";
import SimpleBottomNavigation from "../components/tabbar";
import { useDispatch, useSelector } from "react-redux";
import { Detailblog } from "../store/action/blog";
export const Biography = (props) => {
  console.log("props", props.match);
  const state = useSelector((state) => state.blog[0]);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("detail", state);

  React.useEffect(() => {
    dispatch(Detailblog(id));
  }, [dispatch]);
  var result = state.detail.slice(0, 35) + (state?.detail.length > 35 ? "..." : "")
  return (
    <>
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
            src={`https://urduadmin.herokuapp.com/${state?.imagefile}`}
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
            <h3>{state?.title}</h3>
           
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </div>
          <h6>{state?.subtitle}</h6>
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
         {result}
        
        </p>
      </div>
      <BasicTabs data={state}></BasicTabs>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </>
  );
};
