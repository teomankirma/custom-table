import { ref, get, remove } from "firebase/database";
import { database } from "./config";

export const deleteData = async (id) => {
  const userDataRef = ref(database, "users/");
  const snapshot = await get(userDataRef);

  if (snapshot.exists()) {
    const data = snapshot.val();
    const matchingKey = Object.keys(data).find(
      (key) => data[key].userId === id
    );

    // Loop through the data and find the object with the matching id
    if (matchingKey) {
      const userRef = ref(database, "users/" + matchingKey);
      try {
        await remove(userRef);
        console.log("Data deleted successfully");
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    } else {
      console.error("Data with ID not found:", id);
    }
  } else {
    console.error("Data not found at the specified location.");
  }
};
