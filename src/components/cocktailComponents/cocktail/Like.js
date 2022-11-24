import React, {useState, useEffect}  from 'react'
import { connect } from 'react-redux'
import { userLikeAttempt, userLikeDestroy } from '../../../redux/actions/likeActions'
import emptyHeart from '../../../images/icons/heart-empty.png'
import fullHeart from '../../../images/icons/heart-full.png'

const Like = ({idDrink, like, unLike, dataLike, likeData}) => {

  const [isLiked, setIsLiked] = useState(false)
  const userId = localStorage.getItem('userId')

  console.log(likeData)


  useEffect(() => {
    if(dataLike?.length > 0) {
      setIsLiked(true)
    }
  }, [dataLike?.length])

  const handleClick = () => {
    setIsLiked(!isLiked)
    if(!isLiked) {
      const options = {account: `/api/users/${userId}`, idDrink: idDrink}
      like(options)
    } else {
      unLike(dataLike?.[0]?.id || likeData?.data?.id)
     }
  }

  const icon = isLiked ? fullHeart : emptyHeart

  return (

    userId &&
    <div>
    <p>{dataLike?.id}</p>
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
