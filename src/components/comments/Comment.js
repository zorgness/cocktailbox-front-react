import React from 'react';
import Rating from './Rating';
import { connect } from 'react-redux';
import { useFindCommentOwner } from '../../customHooks/actions/fetchDataAction';
import { userDestroyComment } from '../../redux/actions/commentAction';
import Button from 'react-bootstrap/Button';

const Comment = ({comment, destroyComment}) => {

  const userId = localStorage.getItem('userId')
  const { id, account, content, rating } = comment
  const { data } =  useFindCommentOwner(account)

  const posterId = data?.['@id'].split('/')[3]

  return (
    <div className='border border-dark'>
        <h4>Comment by: {data?.username}</h4>
        <Rating rating={rating} />
        <p>{content}</p>
        {
          userId === posterId
          &&  <Button
                variant="danger"
                onClick={() =>  destroyComment(id)}>
                Delete
              </Button>
        }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    destroyComment: (id) => dispatch(userDestroyComment(id))
  }
}

export default connect(null, mapDispatchToProps)(Comment)
