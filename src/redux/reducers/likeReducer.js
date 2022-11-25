import { LIKE_SEND_SUCCESS, LIKE_SEND_ERROR, LIKE_DESTROY_SUCCESS, LIKE_DESTROY_ERROR } from "../constants"

const initialState = {
  drinks: [],
  data: null,
  error: null,
  idDrink: null,
}

// drinks: []

const likeReducer = (state=initialState, action) => {
  switch (action.type) {
    case LIKE_SEND_SUCCESS:
      return {
        ...state,
        drinks: [...state.drinks, action.data],
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
            drinks: state.drinks.filter(drink => drink.id !== action.id),
            data: action.data,
            id: action.id
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
