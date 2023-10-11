import "./style.css";
import { writeUserData } from "./scripts/writeUserData";
import { ref, onValue } from "firebase/database";
import { database } from "./scripts/config";
import { renderTable } from "./scripts/renderTable";
import { deleteData } from "./scripts/deleteData";
import { clearInputFields } from "./scripts/clearInputFields";
import { showMessage } from "./scripts/showMessage";

// Get data from Firebase
const userDataRef = ref(database, "users/");
onValue(userDataRef, (snapshot) => {
  const data = snapshot.val();
  renderTable(data);
});

// Render HTML
document.querySelector("#app").innerHTML = `
  <div class="container">
      <form>
        <input class="name" type="text" placeholder="Enter your name" />
        <select class="options">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <input type="number" class="delay" placeholder="Enter delay (sec)"/>
        <button type="submit" class="btn add-btn">Add</button>
      </form>
      <div class="spinner"></div>
      <div class="success message">Successfully added.</div>
      <div class="error message">Oops. Something went wrong!</div>
      <table class="table">
        <thead class="table-head">
          <tr>
            <th>Name</th>
            <th>Option</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="table-body"></tbody>
      </table>
  </div>

`;

// DOM elements
const spinner = $(".spinner");

// Event listeners
$(document).ready(function () {
  $(".add-btn").click(async function (e) {
    e.preventDefault();
    let name = $(".name").val();
    let option = $(".options").val();
    let delay = $(".delay").val();
    if (name == "" || option == "" || delay == "") {
      alert("Please fill in all fields");
    } else {
      clearInputFields();
      try {
        spinner.show();
        await new Promise((resolve) => setTimeout(resolve, delay * 1000));
        spinner.hide();
        writeUserData(name, option);
        showMessage("success");
      } catch (error) {
        showMessage("error");
      }
    }
  });
});

$(document).on("click", ".delete-btn", function () {
  const closestElement = $(this).closest("tr");
  deleteData(closestElement);
});
