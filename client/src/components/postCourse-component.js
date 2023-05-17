import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import courseService from "../services/course-service";

const PostCoursecomponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login first before posting a new course.</p>
          <button class="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
            Take me to login page.
          </button>
        </div>
      )}
      {currentUser && !currentUser.user.role == "instructor" && (
        <div>
          <h1>Only instructorss can post new courses.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>Welcome to Student's Course Page.</h1>
        </div>
      )}
    </div>
  );
};

export default PostCoursecomponent;
