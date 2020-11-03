import * as actionTypes from "../actionTypes";
import { Match } from "./MatchModel";

interface AddMatchAction {
  type: typeof actionTypes.ADD_MATCH;
  payload: Match;
}
interface GetMatchsesAction {
  type: typeof actionTypes.GET_MATCHSES;
  payload: Match[] | null;
}
interface GetMatchByIdAction {
  type: typeof actionTypes.GET_MATCH_BY_ID;
  payload: Match;
}
interface DeleteMatchAction {
  type: typeof actionTypes.DELETE_MATCH;
}
interface UpdateMatchAction {
  type: typeof actionTypes.UPDATE_MATCH;
}

export type MatchApiActions =
  | AddMatchAction
  | GetMatchsesAction
  | GetMatchByIdAction
  | DeleteMatchAction
  | UpdateMatchAction;
