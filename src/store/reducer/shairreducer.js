export default (state = [], action) => {

  switch (action.type) {
    case "SHAIR":
      return (state = action.payload);

    default:
      return state;
  }
};
