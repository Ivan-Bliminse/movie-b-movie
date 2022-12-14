import React, { useEffect, useState } from "react";
import style from "./Landing.module.css";
import { Link, useNavigate } from "react-router-dom";

const Landing = ({ handleSearch }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  function handleSubmit() {
    handleSearch(text);
    navigate("/search");
    setText("");
  }

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className={style.search}>
      <h2 className={style.search__name_blue}>B-Video</h2>
      <form action='' className={style.search__form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setText(e.target.value)}
          className={style.search__input}
        />
      </form>
      <Link to='/search' className={style.search_button}>
        or Browse All
      </Link>
    </div>
  );
};

export default Landing;
