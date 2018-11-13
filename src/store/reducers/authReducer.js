const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  //
  switch (action.type) {
    //
    case "LOGIN_ERROR":
      return { ...state, authError: "Login Failed" };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return { ...state, authError: null };

    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;

    case "SIGN_UP_SUCCESS":
      console.log("signup success");
      return { ...state, authError: null };

    case "SIGN_UP_ERROR":
      console.log("signup error");
      return { ...state, authError: action.err.message };

    default:
      return state;
  }
};

export default authReducer;
