import React, { useEffect } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
import {
  commentListFetch,
  commentListUnload,
} from "../../redux/actions/commentAction";

const CommentsContainer = ({ comment, idDrink, name, getList, unloadList }) => {
  const { commentList } = comment;

  console.log(commentList);

  useEffect(() => {
    console.log(idDrink);
    getList(idDrink);
    unloadList();
  }, [idDrink, getList, unloadList]);

  return (
    <div className="wrapper">
      <div className="comment-column d-flex flex-column  gap-3">
        {commentList?.map((comment, index) => {
          return <Comment key={index} comment={comment} getList={getList} />;
        })}
      </div>

      <div className="comment-column">
        <pre className="mt-3">
          {commentList?.length} review{commentList?.length > 1 ? "s" : ""}
        </pre>
        <CommentForm
          idCocktail={idDrink}
          listSize={commentList?.length}
          name={name}
          getList={getList}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comment: state.comment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (idDrink) => dispatch(commentListFetch(idDrink)),
    unloadList: () => dispatch(commentListUnload()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
