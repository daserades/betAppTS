import React, { Fragment } from "react";
import { AppState } from "../../redux/actions/configureStore";
import {  Match } from "../../redux/actions/types/MatchModel";
import * as matchActions from "../../redux/actions/matchActions";
import { connect } from "react-redux";
import { AppActions } from "../../redux/actions/action";
import { ThunkDispatch } from "redux-thunk";

interface MatchInfoState {}

type Props = LinkDispatchToProps & LinkStateToProps;

class MatchInfo extends React.Component<Props, MatchInfoState> {
  componentDidMount() {
    this.props.getMatchesAction();
    console.log("This comp matches", this.props.match);
  }
  render() {
    return (
      <div>
        {this.props.match.map((item) => (
          <Fragment>
            <h1>{item.CouponDate}</h1>
            {item.Coupon?.map((ct) => (
              <Fragment>
                <h1>{ct.Comment}</h1>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    );
  }
}

interface LinkStateToProps {
  match: Match[];
}
interface LinkDispatchToProps {
  getMatchesAction: () => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => {
  return {
    match: state.getMatchReducer.matchState,
  };
};
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => {
  return {
    getMatchesAction: () => dispatch(matchActions.getMatches()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MatchInfo);
