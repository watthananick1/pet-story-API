import admin from "firebase-admin";
import serviceAccount from "./pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json" assert { type: "json" };

export const app = express();
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
});
