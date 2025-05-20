const {
  injectDB,
  getAllHobbyGroups,
  createHobbyGroups,
} = require("../models/hobbyGroupsModel");

// Controller to fetch all hobbyGroups items
const getHobbyGroups = async (req, res) => {
  try {
    const hobbyGroups = await getAllHobbyGroups();
    res.json(hobbyGroups);
  } catch (err) {
    res.status(500).json({ error: "Failed to get hobby groups" });
  }
};

// Controller to fetch single hobbyGroup items

// Controller to create hobbyGroup
const addHobbyGroups = async (req, res) => {
  try {
    const newHobbyGroup = await createHobbyGroups(req.body);
    res.json(newHobbyGroup);
  } catch (err) {
    res.status(500).json({ error: "Failed to add hobby groups" });
  }
};

// Controller to update hobbyGroup
// Controller to delete hobbyGroup

module.exports = { getHobbyGroups, addHobbyGroups };
