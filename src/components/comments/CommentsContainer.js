import React from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentsContainer = ({comments, idDrink, name}) => {

  const notify = (type) => type === 'effacé'
   ? toast.warning(`Votre commentaire est ${type} !`)
   : toast.success(`Votre commentaire est ${type} !`)



  return (
    <div className='wrapper'>
      <ToastContainer />
        <div className='comment-column d-flex flex-column  gap-3'>
            <pre>{comments.length} commentaire{comments.length < 1 ? 's' : '' }</pre>
            {
              comments?.map((comment, index) => {
                return <Comment key={index} comment={comment} notify={notify} />
              })
            }
        </div>

        <div className='comment-column'>
          <CommentForm idCocktail={idDrink} notify={notify} name={name} />
        </div>

    </div>
  )
}

export default CommentsContainer
