const {
  getAllHobbyGroups,
  getSingleHobbyGroups,
  createHobbyGroup,
} = require("../models/hobbyGroupsModel");

// Controller to fetch ALL hobbyGroups items
const getHobbyGroups = async (req, res) => {
  try {
    const hobbyGroups = await getAllHobbyGroups();
    res.json(hobbyGroups);
  } catch (err) {
    res.status(500).json({ error: "Failed to get hobby groups" });
  }
};

// Controller to fetch SINGLE hobbyGroup items
const singleHobbyGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleHobbyGroups(id);

    if (!result) {
      return res.status(404).json({ message: "hobby groups not found." });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get single hobby groups" });
  }
};

// Controller to create hobbyGroup
const addHobbyGroup = async (req, res) => {
  try {
    const newHobbyGroup = await createHobbyGroup(req.body);
    res.json(newHobbyGroup);
  } catch (err) {
    res.status(500).json({ error: "Failed to add hobby groups" });
  }
};

// Controller to update hobbyGroup
// Controller to delete hobbyGroup

module.exports = { getHobbyGroups, addHobbyGroup, singleHobbyGroup };
