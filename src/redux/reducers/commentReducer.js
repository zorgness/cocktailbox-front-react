import {
    COMMENT_SEND_SUCCESS,
    COMMENT_SEND_ERROR,
    COMMENT_DESTROY_SUCCESS,
    COMMENT_DESTROY_ERROR,
 }
   from "../constants";

const initialState = {
  data: null,
  error: null
}

const commentReducer =  (state=initialState, action) => {
    switch (action.type) {
      case COMMENT_SEND_SUCCESS:
        return {
          ...state,
          data: action.data
        }
      case COMMENT_SEND_ERROR:
        return {
          ...state,
          error: action.error
        }
      case COMMENT_DESTROY_SUCCESS:
        return {
            ...state,
            data: action.data
          }
      case COMMENT_DESTROY_ERROR:
        return {
            ...state,
            error: action.error
          }
      default:
        break;
    }
}

export default commentReducer
