import axios from "axios";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../config/config";
const uri = "https://urduadmin.herokuapp.com";
export const Quizget = () => {
  return async (dispatch) => {
    const q = query(collection(db, "quiz"));
    onSnapshot(q, (querySnapshot) => {
      console.log("iddd", querySnapshot);
      const quizs = [];
      querySnapshot.forEach((doc) => {
        quizs.push(doc.data());
      });
      console.log("Current cities in CA: ", quizs);
      // const { data } = await axios.get(`${uri}/quiz`);
      // console.log("action", data);
      dispatch({
        type: "GET",
        payload: quizs,
      });
    });
  };
};
export const Blogget = () => {
  return async (dispatch) => {
    const q = query(collection(db, "blog"));
    onSnapshot(q, (querySnapshot) => {
      console.log("iddd", querySnapshot);
      const classq = [];
      querySnapshot.forEach((doc) => {
        classq.push(doc.data());
        
      });
      console.log("blogs", classq);

      dispatch({
        type: "BLOG",
        payload: classq,
      });
    });
  };
};
export const Classget = () => {
  return async (dispatch) => {
    const q = query(collection(db, "class"));
    onSnapshot(q, (querySnapshot) => {
      console.log("iddd", querySnapshot);
      const classq = [];
      querySnapshot.forEach((doc) => {
        classq.push(doc.data());
      });
      console.log("Current cities in CA: ", classq);
      // const { data } = await axios.get(`${uri}/class`);
      // console.log("action", data);
      dispatch({
        type: "CLASS",
        payload: classq,
      });
    });
  };
};
export const Lafzsget = () => {
  return async (dispatch) => {
    const q = query(collection(db, "lafz"));
    onSnapshot(q, (querySnapshot) => {
      console.log("iddd", querySnapshot);
      const lafzs = [];
      querySnapshot.forEach((doc) => {
        lafzs.push(doc.data());
      });
      console.log("Current cities in CA: ", lafzs);
      dispatch({
        type: "LAFZ",
        payload: lafzs,
      });
    });
  };

  // return async (dispatch) => {
  //   const { data } = await axios.get(`${uri}/lafz`);
  //   console.log("action", data);
  //   dispatch({
  //     type: "LAFZ",
  //     payload: data,
  //   });
  // };
};
export const Slideget = () => {
  return async (dispatch) => {
    const q = query(collection(db, "slide"));
    onSnapshot(q, (querySnapshot) => {
      console.log("iddd", querySnapshot);
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log("Current cities in CA: ", cities);
      dispatch({
        type: "SLIDE",
        payload: cities,
      });
    });
  };
};
export const Shairget = () => {
  return async (dispatch) => {
    const q = query(collection(db, "shair"));
    onSnapshot(q, (querySnapshot) => {
      console.log("iddd", querySnapshot);
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log("Current cities in CA: ", cities);
      dispatch({
        type: "SHAIR",
        payload: cities,
      });
    });
    // const { data } = await axios.get(`${uri}/shair`);
    // console.log("shairaction", data);
  };
};
export const Detailblog = (id) => {
  console.log("action" + id);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${uri}/blog/${id}`, { id });
      dispatch({
        type: "DETAIL",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
