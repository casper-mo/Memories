import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { createPost, updatePost } from "../../redux/posts/posts.actions";

import styles from "./Form.module.css";
const MemoriesForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState("");
  const [fileError, setFileError] = useState("");

  const post = useSelector((state) =>
    currentId ? state.posts.find((item) => item._id === currentId) : null
  );

  const { register, errors, handleSubmit, reset, setValue } = useForm({
    mode: "all",
    shouldFocusError: true,
  });
  useEffect(() => {
    if (post) {
      console.log("updated post", post);

      setValue("creator", post.creator);
      setValue("title", post.title);
      setValue("message", post.message);
      setValue("tags", post.tags);

      setFileUpload(post.selectedFile);
    }
  }, [post, setValue]);

  const submit = (postData) => {
    if (!fileUpload) {
      setFileError("Must Upload image");
    } else {
      if (currentId) {
        dispatch(
          updatePost(currentId, { ...postData, selectedFile: fileUpload })
        );
      } else {
        dispatch(createPost({ ...postData, selectedFile: fileUpload }));
      }

      clear();
    }
  };
  const clear = () => {
    reset();
    setFileUpload("");
    setCurrentId(null);
  };
  return (
    <Card body className={`${styles.memorise__form} mt-3`}>
      <h6>{currentId ? "Updating" : "Creating"} a Memory</h6>

      <Form autoComplete="off" noValidate onSubmit={handleSubmit(submit)}>
        <Form.Group controlId="creator">
          <Form.Control
            type="text"
            placeholder="Enter creator"
            name="creator"
            ref={register({ required: "Creator is Required" })}
          />
          {errors.creator ? (
            <Form.Text className="alert alert-danger">
              {errors.creator.message}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group controlId="title">
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            ref={register({ required: "title is required" })}
          />
          {errors.title ? (
            <Form.Text className="alert alert-danger">
              {errors.title.message}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Control
            type="text"
            placeholder="Enter Message"
            name="message"
            ref={register({ required: "message is required" })}
          />
          {errors.message ? (
            <Form.Text className="alert alert-danger">
              {errors.message.message}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Control
            type="text"
            placeholder="Enter tags"
            name="tags"
            ref={register({ required: "Tags is required" })}
          />
          {errors.tags ? (
            <Form.Text className="alert alert-danger">
              {errors.tags.message}
            </Form.Text>
          ) : null}
        </Form.Group>
        <div className={styles.input__file}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFileUpload(base64)}
          />
          {fileError ? (
            <Form.Text className="alert alert-danger">{fileError}</Form.Text>
          ) : null}
        </div>
        <Button variant="primary" type="submit" className={styles.submit__btn}>
          Submit
        </Button>
        <Button variant="danger" onClick={clear} className={styles.clear__btn}>
          Clear
        </Button>
      </Form>
    </Card>
  );
};

export default MemoriesForm;
