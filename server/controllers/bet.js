const Bet = require("../models/bets.model");

exports.getMatches = (req, res, next) => {
  Bet.find()
    .then((bet) => res.json(bet))
    .catch((err) => res.status(400).json("Error:" + err));
};

// exports.deleteBet = (req, res, next) => {
//   Bet.findOne({ _id: req.params.id }).then((bet) => {
//     if (!bet) {
//       return res.json({ err: "Data not found" });
//     }
//     Bet.deleteOne({ _id: req.params.id }).then(() => {
//       return res.json({ msg: "Data Silindi" });
//     });
//   });
// };

exports.deleteMatch = (req, res) => {
  Bet.findByIdAndDelete(req.params.id).then(() => res.json(req.params.id));
};

exports.updateMatch = (req, res, next) => {
  Bet.findOne({ _id: req.params.id }).then((bet) => {
    if (!bet) {
      return res.json({ err: "Data not found" });
    } else {
      bet.CouponState = req.body.CouponState;
      bet.CouponComment = req.body.CouponComment;
      bet.CouponRate = req.body.CouponRate;
      bet.AddedBy = req.body.AddedBy;
      bet.Coupon[0].League = req.body.League;
      bet.Coupon[0].Date = req.body.Date;
      bet.Coupon[0].FirstTeam = req.body.FirstTeam;
      bet.Coupon[0].SecondTeam = req.body.SecondTeam;
      bet.Coupon[0].Guess = req.body.Guess;
      bet.Coupon[0].Rate = req.body.Rate;
      bet.Coupon[0].Comment = req.body.Comment;
      bet.Coupon[0].MatchState = req.body.MatchState;
      console.log(req.body.League);
      return bet.save().then((bet) => {
        /// i retured directly bet.because in react reducer need it. reducer can access via action.payload
        return res.json(bet);
      });
    }
  });
};

exports.getMatchById = (req, res, next) => {
  Bet.findOne({ _id: req.params.id })
    .then((bet) => res.json(bet))
    .catch((err) => res.status(400).json("Error:" + err));
};

exports.postMatch = (req, res, next) => {
  let League = req.body.league;
  let Date = req.body.date;
  let FirstTeam = req.body.firstTeam;
  let SecondTeam = req.body.secondTeam;
  let Guess = req.body.guess;
  let Rate = req.body.rate;
  let Comment = req.body.comment;
  let MatchState = req.body.matchState;
  let CouponState = req.body.couponState;
  let CouponComment = req.body.couponComment;
  let CouponRate = req.body.couponRate;
  let AddedBy = req.body.addedBy;

  console.log("*****************");

  const newCoupon = new Bet({
    Coupon: [
      {
        League,
        Date,
        FirstTeam,
        SecondTeam,
        Guess,
        Rate,
        Comment,
        MatchState,
      },
    ],
    CouponState,
    CouponComment,
    CouponRate,
    AddedBy,
  });

  console.log("Request body");
  console.log(req.body);
  newCoupon.save();
  return res.json({
    oka: "oka",
  });
};
