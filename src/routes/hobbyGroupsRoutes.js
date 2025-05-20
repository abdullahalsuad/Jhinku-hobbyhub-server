const express = require("express");
const router = express.Router();

const {
  getHobbyGroups,
  addHobbyGroup,
  singleHobbyGroup,
} = require("../controllers/hobbyGroupsController");

// GET all hobby groups
router.get("/groups", getHobbyGroups);

// GET Single hobby groups
router.get("/groups/:id", singleHobbyGroup);

// POST new hobby group
router.post("/groups", addHobbyGroup);

module.exports = router;
