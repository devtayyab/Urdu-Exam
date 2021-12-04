import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Blogget } from "../store/action/blog";

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
      <h5
        style={{
          paddingLeft: "40px",
          fontFamily: "Noto Nastaliq Urdu",
          color: "#3b5998",
        }}
      >
        سوانحی خاکے
      </h5>
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
          <Link
            to={{
              pathname: `/biography/${e.blogs._id}`,
              query: {
                title: e.blogs.title,
                dob: e.blogs.dob,
                detail: e.blogs.detail,
                subtitle: e.blogs.title,
                imagefile: e.imagefile,
                gazzal: e.gazzal,
                nazm: e.nazm,
              },
            }}
          >
            {/* <Link to={{path}`/biography/${e.blogs._id, e}`} params={{ testvalue: e }}> */}
            <Avatar
              src={e.imagefile}
              style={{
                width: "100px",
                height: "100px",
              }}
            ></Avatar>
            <br />
            <p
              style={{
                color: "black",
              }}
            >
              {e.blogs.title}
              <br />
              {e.blogs.dob}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
