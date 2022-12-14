import {
    COMMENT_SEND_SUCCESS,
    COMMENT_SEND_ERROR,
    COMMENT_DESTROY_SUCCESS,
    COMMENT_DESTROY_ERROR,
    COMMENT_LIST_ERROR,
    COMMENT_LIST_RECEIVED,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_UNLOAD
 }
   from "../constants";

const initialState = {
  commentList: null,
  isFetching: false,
  error: null,

}

const commentReducer =  (state=initialState, action) => {
    switch (action.type) {
      case COMMENT_LIST_REQUEST:
        return {
          ...state,
          isFetching: true,
        };
      case COMMENT_LIST_RECEIVED:
        return {
          ...state,
          commentList: !state.commentList ? action.data['hydra:member']
            : state.commentList.concat(action.data['hydra:member']),
          isFetching: false
        };
      case COMMENT_LIST_UNLOAD:
        return {
          ...state,
          isFetching: false,
          commentList: null
        }
      case COMMENT_LIST_ERROR:
          return {
              ...state,
              isFetching: false,
              commentList: null,
              error: action.error
            };
      case COMMENT_SEND_SUCCESS:
        return {
          ...state,
          commentList: [action.comment, ...state.commentList]
        };
      case COMMENT_SEND_ERROR:
        return {
          ...state,
          error: action.error
        }
      case COMMENT_DESTROY_SUCCESS:
        return {
            ...state,
            commentList: state.commentList.filter(comment => comment.id !== action.id)
          }
      case COMMENT_DESTROY_ERROR:
        return {
            ...state,
            error: action.error
          }
      default:
        return state
    }
}

export default commentReducer
