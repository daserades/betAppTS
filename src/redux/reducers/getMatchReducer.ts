import { MatchType } from "./../actions/types/MatchModel";
import { MatchApiActions } from "./../actions/types/matchModelAction";
import * as actionTypes from "../actions/actionTypes";

const initialState: MatchType = {
  matchState: [],
};

export function getMatchReducer(
  state = initialState,
  action: MatchApiActions
): MatchType {
  switch (action.type) {
    case actionTypes.GET_MATCHSES:
      console.log("reducer get match action", state);
      return {
        ...state,
        matchState: action.payload as [],
      };
    case actionTypes.DELETE_MATCH:
      console.log("Delete match reducer", action.payload);
      return {
        ...state,
        matchState: state.matchState.filter(
          (match) => match._id !== action.payload
        ),
      };
    case actionTypes.UPDATE_MATCH:
      console.log("Action.payload reducer update", action.payload);
      return {
        ...state,
        matchState: state.matchState.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}
