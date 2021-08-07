const initialState = {
  isLogin: false,
};

const loginReducer = (prevState = initialState, action: { type: string }) => {
  switch (action.type) {
    case "LOGIN":
      return { ...prevState, isLogin: true };
    case "LOGOUT":
      return { ...prevState, isLogin: false };
    default:
      return {...prevState};
  }
};
export default loginReducer;
