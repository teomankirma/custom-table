import { ref, set } from "firebase/database";
import { database } from "./config";

export const writeUserData = (name, option) => {
  let userId = crypto.randomUUID();
  set(ref(database, "users/" + userId), {
    userId: userId,
    name: name,
    option: option,
  });
};
