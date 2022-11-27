import React from 'react';
import Rating from './Rating';
import { connect } from 'react-redux';
import { useFindCommentOwner } from '../../customHooks/actions/fetchDataAction';
import { userDestroyComment } from '../../redux/actions/commentAction';
import Button from 'react-bootstrap/Button';
import { capitalize } from '../../utils/capitalize'

const Comment = ({comment, destroyComment, notify }) => {

  const userId = localStorage.getItem('userId')

  const { data } =  useFindCommentOwner(comment?.account)

  const posterId = data?.['@id'].split('/')[3]

  const handleDestroy = () => {
    destroyComment(comment?.id)
    notify('effacé')

  }

  return (
    <div className='m-3'>
      <div className='rounded bg-white text-dark p-2'>
          <h4>comment by: {capitalize(data?.username)}</h4>
          <Rating rating={comment?.rating} />
          <p>{comment?.content}</p>
          {
            userId === posterId
            &&  <Button
                  variant="danger"
                  onClick={handleDestroy}>
                  Delete
                </Button>
          }
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    destroyComment: (id) => dispatch(userDestroyComment(id))
  }
}

export default connect(null, mapDispatchToProps)(Comment)
