import React, { Fragment } from "react";
import { AppState } from "../../redux/actions/configureStore";
import { Match } from "../../redux/actions/types/MatchModel";
import * as matchActions from "../../redux/actions/matchActions";
import { connect } from "react-redux";
import { AppActions } from "../../redux/actions/action";
import { ThunkDispatch } from "redux-thunk";

interface MatchInfoState {
  modalShow: boolean;
  matchId: string;
}

type Props = LinkDispatchToProps & LinkStateToProps;

class MatchInfo extends React.Component<Props, MatchInfoState> {
  componentDidMount() {
    this.props.getMatchesAction();
    console.log("This comp matches", this.props.matches);
  }
  handleDelete = (id: string) => {
    this.props.deleteMatchAction(id);
  };
  render() {
    return (
      <div>
        <div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col">League</th>
                  <th scope="col">Date</th>
                  <th scope="col">FirstTeam</th>
                  <th scope="col">SecondTeam</th>
                  <th scope="col">Guess</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Match State</th>
                  <th scope="col">CouponState</th>
                  <th scope="col">CouponComment</th>
                  <th scope="col">CouponRate</th>
                  <th scope="col">AddedBy</th>
                  <th scope="col">CouponDate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.matches.map((item, index) => (
                  <Fragment key={item._id}>
                    <tr>
                      {item.Coupon?.map((td) => (
                        <Fragment key={td._id}>
                          <td>{td.League}</td>
                          <td>{td.Date}</td>
                          <td>{td.FirstTeam}</td>
                          <td>{td.SecondTeam}</td>
                          <td>{td.Guess}</td>
                          <td>{td.Rate}</td>
                          <td>{td.Comment}</td>
                          <td>{td.MatchState}</td>
                        </Fragment>
                      ))}
                      <td>{item.CouponState}</td>
                      <td>{item.CouponComment}</td>
                      <td>{item.CouponRate}</td>
                      <td>{item.AddedBy}</td>
                      <td>{item.CouponDate}</td>
                      <td>
                        <button
                          onClick={() => this.handleDelete(item._id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {}}
                          className="btn btn-outline-primary btn-sm"
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

interface LinkStateToProps {
  matches: Match[];
}
interface LinkDispatchToProps {
  getMatchesAction: () => void;
  deleteMatchAction: (matchId: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => {
  return {
    matches: state.getMatchReducer.matchState,
  };
};
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => {
  return {
    getMatchesAction: () => dispatch(matchActions.getMatches()),
    deleteMatchAction: (matchId: string) =>
      dispatch(matchActions.deleteMatch(matchId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MatchInfo);
