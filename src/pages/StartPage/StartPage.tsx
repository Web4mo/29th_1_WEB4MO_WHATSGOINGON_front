import React from "react";
import { Link } from "react-router-dom";
import {
  StartPageHeader,
  StartPage1,
  StartPage2,
  StartPage3,
} from "assets/export";
import "./StartPage.css";

function StartPage() {
  return (
    <div className="startPage">
      <StartPageHeader />
      <br />
      <br />
      <br />
      <br />
      <Link to="/login">
        <StartPage1 />
      </Link>
      <br />
      <br />
      <Link to="/login">
        <StartPage2 />
      </Link>
      <br />
      <br />
      <Link to="/signup">
        <StartPage3 />
      </Link>
    </div>
  );
}

export default StartPage;
