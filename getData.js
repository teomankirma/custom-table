import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "./config";

const starCountRef = ref(database, "users/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
