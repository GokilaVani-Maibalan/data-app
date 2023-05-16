import React from "react";
import { useHistory } from "react-router-dom";

const Base = function ({ name, title, children }) {
  const history = useHistory();
  return (
    <div>
      <div className="nav-styles">
        <span>
          <button
            className="nav-button"
            onClick={() => history.push("/add/user")}
          >
            Add User
          </button>
        </span>

        <span>
          <button className="db-button" onClick={() => history.push("/")}>
            Dashboard
          </button>
        </span>
      </div>

      <div className="head">{title}</div>

      <div className="content">{children}</div>
      <footer>
        Contact us
        <p> email : example@gmail.com</p>
        <p>Phone : 9332688260</p>
      </footer>
    </div>
  );
};

export default Base;
