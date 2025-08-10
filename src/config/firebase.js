// import fs from "fs"; // To read files
// import path from "path"; // To build file paths
import admin from "firebase-admin";

// import { fileURLToPath } from "url"; // To get current file's path

// Step 2: Get current file and folder path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const serviceAccountPath = path.resolve(__dirname, "serviceAccountKey.json");

const fileData = Buffer.from(
  process.env.FIREBASE_SERVICES_KEY,
  "base64"
).toString("utf8");

const serviceAccount = JSON.parse(fileData);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
