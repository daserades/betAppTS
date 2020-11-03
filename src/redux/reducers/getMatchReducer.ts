import { MatchType } from "./../actions/types/MatchModel";
import { MatchApiActions } from "./../actions/types/matchModelAction";
import * as actionTypes from "../actions/actionTypes";

// const initialState2: Match = {
//   Coupon: [
//     {
//       League: "",
//       Date: "",
//       FirstTeam: "",
//       SecondTeam: "",
//       Guess: "",
//       Rate: "",
//       Comment: "",
//       MatchState: 0,
//     },
//   ],
//   CouponState: 0,
//   CouponComment: "",
//   CouponRate: 0,
//   AddedBy: "",
//   CouponDate: {
//     type: new Date(),
//     default: "",
//   },
// };

const initialState: MatchType = {
  matchState: [],
};

export function getMatchReducer(
  state = initialState,
  action: MatchApiActions
): MatchType {
  switch (action.type) {
    case actionTypes.GET_MATCHSES:
      console.log("reducer action", action.payload);
      return {
        ...state,
        matchState: action.payload as [],
      };

    default:
      return state;
  }
}
