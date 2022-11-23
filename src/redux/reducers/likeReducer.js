import { LIKE_SEND_SUCCESS, LIKE_SEND_ERROR, LIKE_DESTROY_SUCCESS, LIKE_DESTROY_ERROR } from "../constants"

const initialState = {

  data: null,
  error: null
}

const likeReducer = (state=initialState, action) => {
  switch (action.type) {
    case LIKE_SEND_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case LIKE_SEND_ERROR:
        return {
          ...state,
          error: action.error
        }
    case LIKE_DESTROY_SUCCESS:
          return {
            ...state,
            data: action.data
          }
    case LIKE_DESTROY_ERROR:
          return {
            ...state,
            error: action.error
          }
    default:
      return state
  }
}

export default likeReducer
