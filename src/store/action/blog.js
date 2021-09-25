import axios from "axios";
const uri = "http://localhost:5000";
export const Quizget = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${uri}/quiz`);
    console.log("action", data);
    dispatch({
      type: "GET",
      payload: data,
    });
  };
};
export const Classget = () => {
    return async (dispatch) => {
      const { data } = await axios.get(`${uri}/class`);
      console.log("action", data);
      dispatch({
        type: "CLASS",
        payload: data,
      });
    };
  };
  export const Lafzsget = () => {
    return async (dispatch) => {
      const { data } = await axios.get(`${uri}/lafz`);
      console.log("action", data);
      dispatch({
        type: "LAFZ",
        payload: data,
      });
    };
  };

export const Detailaction = (id) => {
  console.log("action" + id);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${uri}/product/${id}`, { id });
      dispatch({
        type: "DETAIL",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};