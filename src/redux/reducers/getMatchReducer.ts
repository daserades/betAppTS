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
      return {
        ...state,
        matchState: action.payload as [],
      };
    case actionTypes.DELETE_MATCH:
      return {
        ...state,
        matchState: state.matchState.filter(
          (match) => match._id !== action.payload
        ),
      };
    case actionTypes.UPDATE_MATCH:
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
