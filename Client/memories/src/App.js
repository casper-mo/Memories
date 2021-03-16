import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./redux/posts/posts.actions";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container fluid="md">
      <Row>
        <Col lg="12">
          <Header />
        </Col>
        <Col xs="12">
          <Row className="content_wrapper">
            <Col sm="12" lg="8" md="6" className="my-sm-3 my-3">
              <Posts setCurrentId={setCurrentId} />
            </Col>
            <Col sm="12" lg="4" md="6" className=" my-sm-3">
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
