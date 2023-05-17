import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course-service";

const CourseComponents = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    console.log("Using  effect.");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    CourseService.get(_id)
      .then((data) => {
        setCourseData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login before seeing your courses</p>
          <button
            onClick={handleTakeToLogin}
            className="btn btn-primary btn-log"
          >
            Take me to login page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>Welcome to instructor's Course page.</div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div>Welcome to student's Course page.</div>
      )}
    </div>
  );
};

export default CourseComponents;
