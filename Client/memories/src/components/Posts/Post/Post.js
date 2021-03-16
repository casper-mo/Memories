import React from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deltetPost, likePost } from "../../../redux/posts/posts.actions";
import styles from "./Post.module.css";
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card className={styles.post__wrapper}>
      <div className="position-relative">
        <Card.Img variant="top" src={post.selectedFile} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.post_head}>
        <h6>{post.creator}</h6>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>
      <div className={styles.post_edit}>
        <Button onClick={() => setCurrentId(post._id)}>
          <i className="fas fa-ellipsis-v"></i>
        </Button>
      </div>
      <Card.Body>
        <div className={styles.post_details}>
          <p>{post.tags.map((tag) => `#${tag} `)}</p>
        </div>
        <div className={styles.content}>
          <h5>{post.title}</h5>
          <p>{post.message}</p>
        </div>
      </Card.Body>
      <div className={styles.post__actions}>
        <Button
          className={styles.btn__like}
          onClick={() => dispatch(likePost(post._id))}
        >
          <i className="far fa-thumbs-up pr-1"></i> Like {post.likeCount}
        </Button>
        <Button
          className={styles.btn__delete}
          variant="danger"
          onClick={() => dispatch(deltetPost(post._id))}
        >
          <i className="fas fa-trash pr-1"></i>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Post;
