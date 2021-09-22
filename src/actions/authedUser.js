import { SET_AUTHED_USER } from "./actionTypes"
import { LOG_OUT } from "./actionTypes"

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function logOut() {
  return {
    type: LOG_OUT
  }
}