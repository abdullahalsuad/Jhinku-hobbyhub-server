const { ObjectId } = require("mongodb");

let hobbyGroupsCollection;

// Injects the MongoDB database connection into this module
async function injectDB(db) {
  hobbyGroupsCollection = db.collection("hobbyGroups");
}

// Fetches all hobby groups items from the database
const getAllHobbyGroups = async () => {
  const result = await hobbyGroupsCollection.find().toArray();
  return result;
};

// Fetches single hobby group items by its id
const getSingleHobbyGroup = async (id) => {
  const result = await hobbyGroupsCollection.findOne({ _id: new ObjectId(id) });
  return result;
};

// Fetches  user's ALL  hobby groups items by email
const getUserHobbyGroups = async (email) => {
  const result = await hobbyGroupsCollection
    .find({ userEmail: email })
    .toArray();
  return result;
};

// Create new hobby group in the database
const createHobbyGroup = async (hobbyGroup) => {
  const result = await hobbyGroupsCollection.insertOne(hobbyGroup);
  return result;
};

// Update a hobby group by its id

// Delete a hobby group by its id

module.exports = {
  injectDB,
  getAllHobbyGroups,
  getSingleHobbyGroup,
  getUserHobbyGroups,
  createHobbyGroup,
};
