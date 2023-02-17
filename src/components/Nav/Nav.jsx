// import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function nav(props) {
  return (
    <div className={style.container}>
      <Link to="/">LOGOUT</Link>
      <Link to="Home">
        <span>Home</span>
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <Link to="About">
        <span>About</span>
      </Link>
    </div>
  );
}
