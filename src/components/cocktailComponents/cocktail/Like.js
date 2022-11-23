import React, {useState}  from 'react'
import { connect } from 'react-redux'
import { userLikeAttempt, userLikeDestroy } from '../../../redux/actions/likeActions'
import emptyHeart from '../../../images/icons/heart-empty.png'
import fullHeart from '../../../images/icons/heart-full.png'

const Like = ({idDrink, authData, likeData, like, unLike, liked}) => {

  const [isLiked, setIsLiked] = useState(liked)
  const userId = localStorage.getItem('userId')

  const handleClick = () => {
    setIsLiked(!isLiked)
    if(!isLiked) {
      const options = {account: `/api/users/${userId}`, idDrink: idDrink}
      like(options)
    } else {
      unLike(likeData?.data?.id)
     }
  }

  const icon = isLiked ? fullHeart : emptyHeart

  return (

    userId &&
    <div>
      <img src={icon} className="avatar" alt="empty heart" onClick={handleClick}  />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authData : state.auth,
    likeData: state.like
  }
}

const mapDispatchToProps = dispatch => {
  return {
    like: options => dispatch(userLikeAttempt(options)),
    unLike: id => dispatch(userLikeDestroy(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like)
