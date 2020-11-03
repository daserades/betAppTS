import React from "react";
import classes from "./HomePage.module.css";
import { Link, NavLink } from "react-router-dom";




const HomePage: React.FC<null> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.centerItems}>
        <Link to="/addmatch" style={{ color: "gray" }}>
          <h1> Add Match(es)</h1>
        </Link>
        <div className={classes.links}>
          <NavLink to="/matchinfo" style={{ color: "gray" }}>
            <h1>Show Match(es)</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
