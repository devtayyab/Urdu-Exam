export default (state = [], action) => {

  switch (action.type) {
    case "GET":
      return (state = action.payload);

    default:
      return state;
  }
};
