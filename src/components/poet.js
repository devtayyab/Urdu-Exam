import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Blogget } from "../store/action/blog";
import img from "../images/24.jpg";
import { useDispatch, useSelector } from "react-redux";
import Reveal from "react-reveal/Reveal";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 205,
  },
  media: {
    height: 140,
  },
});

export default function Poet() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Blogget());
  }, [dispatch]);
  const state = useSelector((state) => state.blog);

  return (
    <div
      style={{
        // backgroundColor: "#333",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
      }}
    >
      <h5>سوانحی خاکے</h5>
      {state.map((e) => (
        <div
          style={{
            display: "inline-block",
            color: "white",
            textAlign: "center",
            padding: "4px",
            textDecoration: "none",
          }}
        >
          <Link to={`/biography/${e._id}`} params={{ testvalue: "hello" }}>
            <Avatar
              src={`https://urduadmin.herokuapp.com/${e.imagefile}`}
              style={{
                width: "150px",
                height: "150px",
              }}
            ></Avatar>
            <br />
            <p
              style={{
                color: "black",
              }}
            >
              {e.title}
              <br />
              1722-1810
            </p>
          </Link>
        </div>
      ))}
      {/* <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
        <Link to="/biography">
          <Avatar
            src={img}
            style={{
              width: "150px",
              height: "150px",
            }}
          ></Avatar>
          <br />
          <p
            style={{
              color: "black",
            }}
          >
            میر تقی میر
            <br />
            1722-1810
          </p>
        </Link>
      </div>
      <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
        <Link to="/biography">
          <Avatar
            src={img}
            style={{
              width: "150px",
              height: "150px",
            }}
          ></Avatar>
        </Link>
        <br />
        <p
          style={{
            color: "black",
          }}
        >
          میر تقی میر
          <br />
          1722-1810
        </p>
      </div>
      <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
        <Link to="/biography">
          <Avatar
            src={img}
            style={{
              width: "150px",
              height: "150px",
            }}
          ></Avatar>
          <br />
          <p
            style={{
              color: "black",
            }}
          >
            میر تقی میر
            <br />
            1722-1810
          </p>
        </Link>
      </div> */}
    </div>
  );
}
