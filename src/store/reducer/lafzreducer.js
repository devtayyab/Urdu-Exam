export default (state = [], action) => {

  switch (action.type) {
    case "LAFZ":
      return (state = action.payload);

    default:
      return state;
  }
};
