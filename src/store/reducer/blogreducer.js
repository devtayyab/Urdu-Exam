export default (state = [], action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
      case "BLOG":
        return state = action.payload
      case "DETAIL":
        return  [action.payload];
      default:
        return state;
    }
  };
  