import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import User from "../User/User";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);
  const getUsers = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      fetch("https://reqres.in/api/users?page=1")
        .then((res) => res.json())
        .then((dt) => {
          setData(true);
          setUsers(dt.data);
        });
    } else {
      setData(false);
    }
  }, [open]);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#lgm">
            LGMTASK-02
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <NavLink
              className="nav"
              to="/home"
              style={(isActive) => ({
                color: isActive ? "white" : "blue",
              })}
            >
              home
            </NavLink>
            <div class="navbar-nav ms-auto">
              <button
                onClick={() => getUsers()}
                className={`btn btn-${open ? "danger" : "success"}`}
              >
                {open ? "Close Users" : "Get Users"}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h1>Our Users</h1>
        {open && !data && (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row">
          {open &&
            users.map((user) => (
              <div className="col-md-4 gy-3">
                <User key={user.id} user={user}></User>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
