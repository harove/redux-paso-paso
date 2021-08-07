const initialState = {
  data: [{
      id:1,
      name:"Alex",
      email:"alex@gmail.comn"
  }],
};

const userReducer = (
  prevState = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    case "USER_CREATE":
      return {
        data: [...prevState.data, action.payload],
      };
    case "USER_DELETE":
      return {
        data: prevState.data.filter((u: any) => u.id !== action.payload),
      };
    case "USER_UPDATE":
      return {
        data: prevState.data.map((u: any) => {
          if (u.id === action.payload.id) return action.payload;
          return u;
        }),
      };
    default:
      return prevState;
  }
};
export default userReducer;
