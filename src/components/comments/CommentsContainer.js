import React, { useEffect } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from "react-redux";
import { commentListFetch, commentListUnload } from '../../redux/actions/commentAction';

const CommentsContainer = ({comment, idDrink, name, getList, unloadList}) => {

  const notify = (type) => type === 'effacé'
   ? toast.warning(`Votre commentaire est ${type} !`)
   : toast.success(`Votre commentaire est ${type} !`)

  const { commentList } = comment

  useEffect(() => {
    return(() => {
      getList(idDrink)
      unloadList()
    })

  }, [idDrink, getList, unloadList])


  return (
    <div className='wrapper'>
      <ToastContainer />
        <div className='comment-column d-flex flex-column  gap-3'>

            {
                commentList?.map((comment, index) => {
                return <Comment key={index} comment={comment} getList={getList} notify={notify} />
              })
            }
        </div>

        <div className='comment-column'>
          <pre className='mt-3'>{commentList?.length} commentaire{commentList?.length > 1 ? 's' : '' }</pre>
          <CommentForm idCocktail={idDrink} listSize={commentList?.length} notify={notify} name={name} getList={getList} />
        </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    comment: state.comment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: idDrink => dispatch(commentListFetch(idDrink)),
    unloadList: () => dispatch(commentListUnload())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
