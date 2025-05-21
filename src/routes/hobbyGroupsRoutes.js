const express = require("express");
const router = express.Router();

const {
  getHobbyGroups,
  singleHobbyGroup,
  userHobbyGroups,
  addHobbyGroup,
} = require("../controllers/hobbyGroupsController");

// GET all hobby groups
router.get("/groups", getHobbyGroups);

// GET Single hobby group
router.get("/groups/:id", singleHobbyGroup);

// GET user hobby groups
router.get("/groups/user/:email", userHobbyGroups);

// POST new hobby group
router.post("/groups", addHobbyGroup);

module.exports = router;
