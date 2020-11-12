import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../redux/actions/action";
import classes from "./AddMatch.module.css";
import * as matchActions from "../../redux/actions/matchActions";
import { connect } from "react-redux";

type Props = LinkDispatchToProps;

interface AddMatchState {
  matchState: {
    league: string;
    date: string;
    firstTeam: string;
    secondTeam: string;
    rate: string;
    matchState: string;
    comment: string;
    guess: string;
    couponState: number;
    couponComment: string;
    couponRate: number;
    addedBy: string;
  };
}
class AddMatch extends React.Component<Props, AddMatchState> {
  constructor(props: any) {
    super(props);
    this.handlePost = this.handlePost.bind(this);
    this.state = {
      matchState: {
        league: "",
        date: "",
        firstTeam: "",
        secondTeam: "",
        rate: "",
        matchState: "",
        comment: "",
        guess: "",
        couponState: 0,
        couponComment: "",
        couponRate: 0.0,
        addedBy: "",
      },
    };
  }

  baseState = this.state;

  handlePost(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    this.props.postData(this.state.matchState);
    this.handleClear();
  }
  handleClear() {
    this.setState(this.baseState);
  }
  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      matchState: {
        ...this.state.matchState,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    const {
      league,
      date,
      firstTeam,
      secondTeam,
      rate,
      matchState,
      comment,
      guess,
      couponState,
      couponComment,
      couponRate,
      addedBy,
    } = this.state.matchState;
    return (
      <div>
        <div className={classes.body}>
          <div className={classes.formContainer}>
            <form className={classes.form}>
              <h6 className={classes.formName}>Match Form</h6>
              <div className={classes.formElements}>
                <label>League</label>
                <input
                  type="text"
                  value={league}
                  name="league"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className={classes.formElements}>
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  name="date"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className={classes.formElements}>
                <label>First Team</label>
                <input
                  type="text"
                  value={firstTeam}
                  name="firstTeam"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className={classes.formElements}>
                <label>Second Team</label>
                <input
                  type="text"
                  value={secondTeam}
                  name="secondTeam"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className={classes.formElements}>
                <label>Rate</label>
                <input
                  type="text"
                  value={rate}
                  name="rate"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className={classes.formElements}>
                <label>Guess</label>
                <input
                  type="text"
                  value={guess}
                  name="guess"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className={classes.formElements}>
                <label>Comment</label>
                <input
                  type="text"
                  value={comment}
                  name="comment"
                  onChange={this.changeHandler}
                ></input>
              </div>
              <div className={classes.formElements}>
                <label>State </label>
                <input
                  type="text"
                  value={matchState}
                  name="matchState"
                  onChange={this.changeHandler}
                ></input>
              </div>
            </form>
          </div>
          <div className={classes.formContainer}>
            <div className={classes.form}>
              <form>
                <h6 className={classes.formName}>Coupon Form</h6>
                <div className={classes.formElements}>
                  <label>Coupon State </label>
                  <input
                    type="text"
                    value={couponState}
                    name="couponState"
                    onChange={this.changeHandler}
                  ></input>
                </div>
                <div className={classes.formElements}>
                  <label>Coupon Comment </label>
                  <input
                    type="text"
                    value={couponComment}
                    name="couponComment"
                    onChange={this.changeHandler}
                  ></input>
                </div>
                <div className={classes.formElements}>
                  <label>Coupon Rate </label>
                  <input
                    type="text"
                    value={couponRate}
                    name="couponRate"
                    onChange={this.changeHandler}
                  ></input>
                </div>

                <div className={classes.formElements}>
                  <label>Added By</label>
                  <input
                    type="text"
                    value={addedBy}
                    name="addedBy"
                    onChange={this.changeHandler}
                  ></input>
                </div>
                <div className={classes.btn}>
                  <button onClick={this.handlePost}>Add</button>
                  <button onClick={this.handleClear}>Clear Form</button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(this.state);
                    }}
                  >
                    Clg
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface LinkDispatchToProps {
  postData: (postData: any) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => {
  return {
    postData: (postData) => dispatch(matchActions.postMatch(postData)),
  };
};

export default connect(null, mapDispatchToProps)(AddMatch);
