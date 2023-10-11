import { ref, remove } from "firebase/database";
import { database } from "./config";

export const deleteData = (id) => {
  remove(ref(database, "users/" + id));
};
