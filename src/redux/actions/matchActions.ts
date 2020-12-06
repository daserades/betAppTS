import { Match } from "./types/MatchModel";
import { AppActions } from "./action";
import { Dispatch } from "redux";
import axios from "../../axios/axios";
import { store } from "react-notifications-component";
import * as actionTypes from "./actionTypes";

const notificationInfo = (
  notificationTitle: string,
  notificationMessage: string,
  notificationType: "success" | "danger" | "info" | "default" | "warning"
) =>
  store.addNotification({
    title: `${notificationTitle}`,
    message: `${notificationMessage}`,
    type: notificationType,
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });

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

const deleteMatchAction = (matchId: string): AppActions => {
  return {
    type: actionTypes.DELETE_MATCH,
    payload: matchId,
  };
};

const updateMatchAction = (matchData: Match): AppActions => {
  return { type: actionTypes.UPDATE_MATCH, payload: matchData };
};

export const postMatch = (postData: any) => {
  return async (dispatch: Dispatch<AppActions>) => {
    return await axios.post<Match>("/postMatch", postData).then((res) => {
      console.log("Res", res.data);
      dispatch(addMatchAction(res.data));
      notificationInfo(
        "Success",
        "Match successfuly added to your coupon",
        "info"
      );
    });
  };
};
export const getMatches = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    return await axios.get<Match[]>("/getMatches").then((res) => {
      console.log("Match actions", res.data);
      dispatch(getMatchesAction(res.data));
    });
  };
};

export const deleteMatch = (matchId: string) => {
  return async (dispatch: Dispatch<AppActions>) => {
    return await axios.delete<string>(`/deleteMatch/${matchId}`).then((res) => {
      console.log("Delete Req Data", res.data);
      notificationInfo("Info", "Match deleted successfuly", "danger");
      dispatch(deleteMatchAction(res.data));
    });
  };
};

export const updateMatch = (matchId: string, postData: Match) => {
  return async (dispatch: Dispatch<AppActions>) => {
    return await axios
      .post<Match>(`/updateMatch/${matchId}`, postData)
      .then((res) => {
        console.log("update Action", res.data);
        dispatch(updateMatchAction(res.data));
        notificationInfo("Success", "Match successfuly updated", "success");
      });
  };
};
