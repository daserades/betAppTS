const express = require("express");
const routes = express.Router();
const Bet = require("../controllers/bet");

routes.post("/postMatch", Bet.postMatch);
routes.get("/getMatch", Bet.getMatch);
routes.delete("/deleteMatch/:id", Bet.deleteMatch);
routes.post("/updateMatch/:id", Bet.deleteMatch);
routes.get("/getMatchById/:id", Bet.getMatchById);

module.exports = routes;
