const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseUrl = "https://oddaj-rzeczy-b1665.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseUrl);

firestoreService.restore("data.json");