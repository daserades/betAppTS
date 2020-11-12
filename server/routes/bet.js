const express = require("express");
const routes = express.Router();
const Bet = require("../controllers/bet");

routes.post("/postMatch", Bet.postMatch);
routes.get("/getMatches", Bet.getMatches);
routes.delete("/deleteMatch/:id", Bet.deleteMatch);
routes.post("/updateMatch/:id", Bet.updateMatch);
routes.get("/getMatchById/:id", Bet.getMatchById);

module.exports = routes;
