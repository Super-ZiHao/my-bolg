const initState = {
  
};
export const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "send_type":
      return Object.assign({}, state, action);
    default:
      return state;
  }
};
