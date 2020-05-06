import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import ProfileCard from "../ProfileCard/ProfileCard";
import Button from "../../components/UI/Button/Button";
import classes from "./Profile.module.css";
import axios from "../../axios/quiz";
import { createHTTPHeaders } from "../../shared/utility";
import Spinner from "../../components/UI/Spinner/Spinner"

const Profile = ({ userData, isAuth, history, token }) => {
  const [userQuiz, setUserQuiz] = useState([]);
  useEffect(() => {
    const getUserQuiz = async () => {
      const headers = createHTTPHeaders(token);
      try{
        const res = await axios.get("me", headers);
        setUserQuiz(res.data);
      }catch(e){

      }
     
    };
    token && getUserQuiz();
  }, [token]);
  const CreateQuiz = () => {
    history.push("/new-quizz");
  };
  let userQuizDisplay = <Spinner/>;
  if (userQuiz.length > 0) {
    userQuizDisplay = userQuiz.map((quiz) => (
      <QuizDisplayCard
        quiz={quiz}
        key={quiz._id}
        isAuthor={quiz.author.includes(userData.id)}
      />
    ));
  }else{
    userQuizDisplay = <p>Create your First Quiz!</p>
  }
  return (
    <div className={classes.Container}>
      <div>
        {!isAuth && <Redirect to="/login" />}
        <ProfileCard {...userData} user={true} quizzNumber={userQuiz.length}/>
      </div>
      <div className={classes.ButtonContainer}>
        <div className={classes.Button}>
          <Button btnType="Info" clicked={CreateQuiz}>
            Create A New Quiz
          </Button>
        </div>
      </div>
      <div className={classes.CardContainer}>{userQuizDisplay}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    isAuth: state.auth.token !== null,
    token: state.auth.token,
  };
};
export default withRouter(connect(mapStateToProps)(Profile));
