import React, { Fragment } from "react";
import "./ProfileCard.css";
import Default from "../../../assets/images/profile_default.png";
import {withRouter} from 'react-router'

const ProfileCard = (props) => {
  console.log("[ProfileCard]")
  const RedirectEditUser = () => props.history.push("/user/edit")
  return (
    <div className="frame">
      <div className="box">
        <div className="main">
          <div className="image">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <img src={Default} alt="Profile I" />
          </div>

          <p>{props.email}</p>
          <p className="bio">Quizzer</p>
          {!props.user && (
            <Fragment>
              <div className="btn">
                <p>Follow</p>
              </div>
              <div className="btn">
                <p>Message</p>
              </div>
            </Fragment>
          )}

          <div className="btn" onClick={RedirectEditUser}>
            <p >Edit</p>
          </div>
        </div>

        <div className="posts">
          {" "}
          {props.quizzNumber} <p className="small">Quizzes</p>
        </div>

        <div className="likes">
          {" "}
          0 <p className="small">Likes</p>
        </div>

        <div className="followers">
          {" "}
          0<p className="small">Followers</p>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
};
export default withRouter(ProfileCard);
