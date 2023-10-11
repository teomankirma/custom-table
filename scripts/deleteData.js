import { ref, get, remove } from "firebase/database";
import { database } from "./config";
import { showMessage } from "./showMessage";

export const deleteData = async (closestElement) => {
  const userDataRef = ref(database, "users/");
  const snapshot = await get(userDataRef);

  if (snapshot.exists()) {
    const data = snapshot.val();
    const matchingKey = Object.keys(data).find(
      (key) => data[key].userId === closestElement.attr("id")
    );

    if (matchingKey) {
      const userRef = ref(database, "users/" + matchingKey);
      try {
        closestElement.remove();
        await remove(userRef);
        showMessage("success", "Successfully deleted.");
      } catch (error) {
        showMessage("error");
      }
    } else {
      showMessage("error");
    }
  } else {
    showMessage("error");
  }
};
