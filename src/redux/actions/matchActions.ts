import { Match } from "./types/MatchModel";
import { AppActions } from "./action";
import { Dispatch } from "redux";
import axios from "../../axios/axios";
import * as actionTypes from "./actionTypes";

const addMatchAction = (match: Match): AppActions => {
  return {
    type: actionTypes.ADD_MATCH,
    payload: match,
  };
};

const getMatchesAction = (matchData: Match[]): AppActions => {
  return {
    type: actionTypes.GET_MATCHSES,
    payload: matchData,
  };
};

export const postMatch = (postData: any) => {
  return async (dispatch: Dispatch<AppActions>) => {
    return await axios.post("/postMatch", postData).then((res) => {
      console.log("Res", res.data);
      dispatch(addMatchAction(res.data));
    });
  };
};
export const getMatches = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    return await axios.get<Match[]>("/getMatch").then((res) => {
      console.log("Match actions", res.data);
      dispatch(getMatchesAction(res.data));
    });
  };
};
