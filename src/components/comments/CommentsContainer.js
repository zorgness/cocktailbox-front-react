import React from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

const CommentsContainer = ({comments, idDrink}) => {


  return (
    <div className='wrapper'>
        <div className='comment-column d-flex flex-column align-items-center gap-3 '>

            {
              comments?.map((comment, index) => {
                return <Comment key={index} comment={comment} />
              })
            }

        </div>

        <div className='comment-column'>
          <CommentForm idCocktail={idDrink} />
        </div>

    </div>
  )
}

export default CommentsContainer
