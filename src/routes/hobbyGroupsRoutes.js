const express = require("express");
const router = express.Router();

const {
  getHobbyGroups,
  addHobbyGroups,
} = require("../controllers/hobbyGroupsController");

// GET all hobby groups
router.get("/hobby-groups", getHobbyGroups);

// POST new hobby group
router.post("/hobby-groups", addHobbyGroups);

module.exports = router;
