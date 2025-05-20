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
const getSingleHobbyGroups = async (id) => {
  const result = await hobbyGroupsCollection.findOne({ _id: new ObjectId(id) });
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
  getSingleHobbyGroups,
  createHobbyGroup,
};
