const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseUrl = process.env.REACT_APP_DATABASE_URL;

firestoreService.initializeApp(serviceAccount, databaseUrl);

firestoreService.restore("data.json");