import React, { Fragment, Component } from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";
import * as matchActions from "../../redux/actions/matchActions";
import axios from "../../axios/axios";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../redux/actions/action";
import { Match } from "../../redux/actions/types/MatchModel";

interface MatchInfoState {
  modalShow: boolean;
  matchId: string;
  // matchState: {
  //   League: string;
  //   Date: string;
  //   FirstTeam: string;
  //   SecondTeam: string;
  //   Rate: string;
  //   MatchState: string;
  //   Comment: string;
  //   Guess: string;
  //   CouponState: number;
  //   CouponComment: string;
  //   CouponRate: number;
  //   AddedBy: string;
  //   State: string;
  // };
  Match: Match;
}

interface ParentProps {
  show: boolean;
  matchid: string;
  onHide: () => void;
}

type Props = ParentProps & LinkDispatchToProps;

class UpdateMatch extends Component<Props, MatchInfoState> {
  constructor(props: any) {
    super(props);
    this.state = {
      matchId: "",
      modalShow: false,
      // matchState: {
      //   League: "",
      //   Date: "",
      //   FirstTeam: "",
      //   SecondTeam: "",
      //   Rate: "",
      //   MatchState: "",
      //   Comment: "",
      //   Guess: "",
      //   CouponState: 0,
      //   CouponComment: "",
      //   CouponRate: 0.0,
      //   AddedBy: "",
      //   State: "",
      // },
      Match: {
        _id: "",
        CouponState: 0,
        CouponComment: "",
        CouponRate: 0.0,
        AddedBy: "",
        Coupon: [
          {
            _id: "",
            League: "",
            Date: "",
            FirstTeam: "",
            SecondTeam: "",
            Rate: "",
            MatchState: 0.0,
            Comment: "",
            Guess: "",
          },
        ],
      },
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount() {
    console.log(
      "Props",
      this.props.matchid,
      this.props.onHide,
      this.props.show
    );
    await axios
      .get<Match>(`/getMatchById/${this.props.matchid}`)
      .then((res) => {
        console.log("Single Match", res.data);
        this.setState({
          ...this.state,
          // matchState: {
          //   AddedBy: res.data[0].AddedBy,
          //   CouponRate: res.data[0].CouponRate,
          //   CouponComment: res.data[0].CouponComment,
          //   CouponState: res.data[0].CouponState,
          //   League: res.data[0].Coupon[0].League,
          //   Date: res.data[0].Coupon[0].Date,
          //   FirstTeam: res.data[0].Coupon[0].FirstTeam,
          //   SecondTeam: res.data[0].Coupon[0].SecondTeam,
          //   Rate: res.data[0].Coupon[0].Rate,
          //   Guess: res.data[0].Coupon[0].Guess,
          //   Comment: res.data[0].Coupon[0].Comment,
          //   MatchState: res.data[0].Coupon[0].MatchState,
          //   State: res.data[0].State,
          // },
          Match: {
            _id: res.data._id,
            CouponState: res.data.CouponState,
            AddedBy: res.data.AddedBy,
            CouponComment: res.data.CouponComment,
            CouponRate: res.data.CouponRate,
            CouponDate: res.data.CouponDate,
            Coupon: [
              {
                _id: res.data.Coupon![0]._id,
                Comment: res.data.Coupon![0].Comment,
                Date: res.data.Coupon![0].Date,
                FirstTeam: res.data.Coupon![0].FirstTeam,
                SecondTeam: res.data.Coupon![0].SecondTeam,
                Guess: res.data.Coupon![0].Guess,
                League: res.data.Coupon![0].League,
                MatchState: res.data.Coupon![0].MatchState,
                Rate: res.data.Coupon![0].Rate,
              },
            ],
          },
        });
      });
  }
  handleUpdate = () => {
    this.props.postmatch(this.props.matchid, this.state.Match);
    console.log("this.state", this.state.Match);
    this.props.onHide();
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      Match: {
        ...this.state.Match,
        [e.target.name]: e.target.value,
        Coupon: [
          {
            ...this.state.Match.Coupon![0],
            [e.target.name]: e.target.value,
          },
        ],
      },
    });
  };

  render() {
    const {
      CouponState,
      CouponComment,
      CouponRate,
      AddedBy,
    } = this.state.Match;
    const {
      League,
      Date,
      FirstTeam,
      SecondTeam,
      Rate,
      MatchState,
      Comment,
      Guess,
    } = this.state.Match.Coupon![0];
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Match
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Fragment>
                <Fragment>
                  <Col xs={6} md={4}>
                    <label>League</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={League}
                      name="League"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Date</label>
                    <input
                      type="Date"
                      className="form-control"
                      onChange={this.handleChange}
                      defaultValue={Date}
                      name="Date"
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>First Team</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FirstTeam"
                      defaultValue={FirstTeam}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>SecondTeam</label>
                    <input
                      type="text"
                      className="form-control"
                      name="SecondTeam"
                      defaultValue={SecondTeam}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Guess</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Guess"
                      defaultValue={Guess}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Rate</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.handleChange}
                      name="Rate"
                      defaultValue={Rate}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Comment</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Comment"
                      onChange={this.handleChange}
                      defaultValue={Comment}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Match State</label>
                    <input
                      type="text"
                      className="form-control"
                      name="MatchState"
                      defaultValue={MatchState}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Fragment>
                <Col xs={6} md={4}>
                  <label>Coupon State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CouponState"
                    defaultValue={CouponState}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>C.Comment</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    defaultValue={CouponComment}
                    name="CouponComment"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Coupon Rate</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CouponRate"
                    defaultValue={CouponRate}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Added By</label>
                  <input
                    type="text"
                    className="form-control"
                    name="AddedBy"
                    defaultValue={AddedBy}
                    onChange={this.handleChange}
                  />
                </Col>
              </Fragment>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => {
              console.log("This.state", this.state.Match);
              // this.props.onHide();
            }}
          >
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              this.handleUpdate();
            }}
          >
            Update Data
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

interface LinkDispatchToProps {
  postmatch: (matchId: string, postData: Match) => void;
}
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => {
  return {
    postmatch: (matchId, postData) =>
      dispatch(matchActions.updateMatch(matchId, postData)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateMatch);
