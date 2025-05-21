const express = require("express");
const router = express.Router();

const {
  getHobbyGroups,
  singleHobbyGroup,
  userHobbyGroups,
  addHobbyGroup,
  updateSingleHobbyGroup,
  removeHobbyGroup,
} = require("../controllers/hobbyGroupsController");

// GET all hobby groups
router.get("/groups", getHobbyGroups);

// GET Single hobby group
router.get("/groups/:id", singleHobbyGroup);

// GET user's hobby groups
router.get("/groups/user/:email", userHobbyGroups);

// POST new hobby group
router.post("/groups", addHobbyGroup);

// Update a hobby group by ID
router.put("/groups/:id", updateSingleHobbyGroup);

// DELETE   hobby group
router.delete("/groups/:id", removeHobbyGroup);

module.exports = router;
