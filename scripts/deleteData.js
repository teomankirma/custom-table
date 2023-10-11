import { ref, onValue, remove } from "firebase/database";
import { database } from "./config";

export const deleteData = (id) => {
  const userDataRef = ref(database, "users/");
  onValue(userDataRef, (snapshot) => {
    const data = snapshot.val();

    // Loop through the data and find the object with the matching id
    for (let key in data) {
      if (data[key].userId === id) {
        // Delete the object
        remove(ref(database, "users/" + key));
      }
    }
  });
};
