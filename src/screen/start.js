import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Quizget } from "../store/action/blog";
export default function Start() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(Quizget());
  };
  return (
    <div>
      <Button
        onClick={() => {
          handleClick()
        }}
      >Start</Button>
    </div>
  );
}
