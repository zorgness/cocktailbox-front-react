import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  userLikeAttempt,
  userLikeDestroy,
} from "../../../redux/actions/likeActions";
import emptyHeart from "../../../images/icons/heart-empty.png";
import fullHeart from "../../../images/icons/heart-full.png";
import {
  fetchNumberOfLikesForDrink,
  findUserLike,
} from "../../../api/fetchLikesData";
import { useNavigate } from "react-router-dom";

const Like = ({ idDrink, like, unLike, isPresent }) => {
  const [isLiked, setIsLiked] = useState(false);
  const userId = localStorage.getItem("userId");
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetchNumberOfLikesForDrink(idDrink).then((res) => {
      setNumberOfLikes(res);
    });
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    if (isPresent) {
      findUserLike(idDrink, userId).then((res) => {
        if (res.length > 0) {
          setIsLiked(true);
        }
      });
    }
  }, [userId, idDrink, isPresent]);

  const handleClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      const options = { account: `/api/users/${userId}`, idDrink: idDrink };
      like(options);
    } else {
      findUserLike(idDrink, userId).then((res) => {
        unLike(res[0].id);
      });
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const icon = isLiked ? fullHeart : emptyHeart;

  return (
    <div>
      {userId ? (
        <img
          src={icon}
          className="avatar"
          alt="empty heart"
          onClick={handleClick}
        />
      ) : (
        <img
          src={icon}
          className="avatar"
          alt="empty heart"
          onClick={goToLogin}
        />
      )}
      <p className="text-white f-bold">
        {numberOfLikes} like{numberOfLikes > 1 ? "s" : ""}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
    likeDataStore: state.like,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    like: (options) => dispatch(userLikeAttempt(options)),
    unLike: (id) => dispatch(userLikeDestroy(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);
