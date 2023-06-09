import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    navigate("/");
    setCurrentUser(null);
    window.alert("Logout Successfully");
  };

  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li>
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role == "instructor" && (
                  <li>
                    <Link className="nav-link" to="/postCourse">
                      Post Course
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li>
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <div onClick={handleLogout} className="nav-link">
                      Logout
                    </div>
                  </li>
                )}{" "}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
