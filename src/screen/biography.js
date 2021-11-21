import { Avatar, Checkbox } from "@material-ui/core";
import * as React from "react";
import { Route, useParams, useLocation, Redirect } from "react-router-dom";
import { FavoriteBorder } from "@material-ui/icons";
import imag from "../images/logo.png";
import Favorite from "@material-ui/icons/Favorite";
import BasicTabs from "../components/tabs";
import SimpleBottomNavigation from "../components/tabbar";
import { useDispatch, useSelector } from "react-redux";
import { Detailblog } from "../store/action/blog";
export const Biography = (props) => {
  const location = useLocation();
  console.log(location.query)

  console.log("match", location.query);
  const state = useSelector((state) => state.blog[0]);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id");

  // React.useEffect(() => {
  //   // dispatch(Detailblog(id));
  // }, [dispatch]);
  var result =
    location.query.detail.slice(0, 35) +
    (location.query?.detail.length > 35 ? "..." : "");
  return (
    <>
      {location.query == undefined ? (
        <Redirect to={{
          pathname : "/"
        }}></Redirect>
      ) : (
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
                src={location.query.imagefile}
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
                  fontFamily :'Noto Nastaliq Urdu',
                }}
              >
                <h3>{location.query?.title}</h3>

                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
              <h6>{location.query?.subtitle}</h6>
              <p
                style={{
                  fontFamily: "serif",
                  fontSize: "10px",
                }}
              >
                {location.query?.dob} 
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
          <BasicTabs data={location.query}></BasicTabs>
          <SimpleBottomNavigation></SimpleBottomNavigation>
        </>
      )}
    </>
  );
};
