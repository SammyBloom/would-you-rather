import { ADD_ANSWER } from "./actionTypes";
import { RECEIVE_USERS } from "./actionTypes";
import { ADD_QUESTION } from "./actionTypes";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function addAnswer({authedUser, questionId, answer}) {
  return {
    type: ADD_ANSWER,
    authedUser,
    questionId,
    answer
  }
}