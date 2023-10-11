import { ref, push } from "firebase/database";
import { database } from "./config";

export const writeUserData = (name, option) => {
  let userId = crypto.randomUUID();
  const formattedDate = new Date().toLocaleString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  // Create a reference to the "users" collection and push the data
  const usersRef = ref(database, "users");
  push(usersRef, {
    date: formattedDate,
    userId: userId,
    name: name,
    option: option,
  });
};
