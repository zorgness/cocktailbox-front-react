
export const initialRegisterValue = {
  loading: false,
  error: null,
  username: "",
  password: "",
  verification: "",
  email: ""

};


export const dataSubmitReducer = (state, action) =>  {
  if (action.type === "input") {
    return {
      ...state,
      [action.name]: action.value
    };
  }
  else if (action.type === "done") {
    return {
      ...state,
      state: state

    };
  }
   else if (action.type === "submit") {
    return {
      ...state,
      error: null,
      loading: true
    };
  } else if (action.type === "success") {
    return {
      ...state,
      registered: true,
      loading: false,
      error: null
    };
  } else if (action.type === "error") {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
}
