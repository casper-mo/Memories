import React from "react";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import { Row, Col } from "react-bootstrap";
import Loading from "../../assets/lottie/loading.json";
import Post from "./Post/Post";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Row>
      {posts.length ? (
        posts.map((post) => (
          <Col lg="6" md="12" xs="12" sm="6" key={post._id} className="mb-2">
            <Post post={post} setCurrentId={setCurrentId} />
          </Col>
        ))
      ) : (
        <Lottie options={lottieOptions} height={400} width={400} />
      )}
    </Row>
  );
};

export default Posts;
