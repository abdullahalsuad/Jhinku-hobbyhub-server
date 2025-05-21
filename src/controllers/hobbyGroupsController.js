const {
  getAllHobbyGroups,
  getSingleHobbyGroup,
  getUserHobbyGroups,
  createHobbyGroup,
  updateHobbyGroup,
  deleteHobbyGroup,
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
    const result = await getSingleHobbyGroup(id);

    if (!result) {
      return res.status(404).json({ message: "hobby group not found." });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get single hobby group" });
  }
};

// Controller to fetch SINGLE hobbyGroup items
const userHobbyGroups = async (req, res) => {
  try {
    const { email } = req.params;

    const result = await getUserHobbyGroups(email);

    if (!result) {
      return res.status(404).json({ message: "hobby groups not found." });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get user's hobby groups" });
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
const updateSingleHobbyGroup = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await updateHobbyGroup(id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Hobby group not found" });
    }

    res.json(result);
  } catch (err) {
    console.error("Error updating sushi:", err);
    res.status(500).json({ error: "Failed to update hobby group" });
  }
};

// Controller to delete hobbyGroup
const removeHobbyGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteHobbyGroup(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Hobby Groups not found." });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed delete  sushi" });
  }
};

module.exports = {
  getHobbyGroups,
  addHobbyGroup,
  singleHobbyGroup,
  userHobbyGroups,
  updateSingleHobbyGroup,
  removeHobbyGroup,
};
