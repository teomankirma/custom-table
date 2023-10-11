import "./style.css";
import { writeUserData } from "./writeUserData";
import { ref, onValue, remove } from "firebase/database";
import { database } from "./config";

const starCountRef = ref(database, "users/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  renderTable(data);
});

const renderTable = (data) => {
  const table = $(".table-body");
  table.empty();
  for (let key in data) {
    table.append(`
      <tr id=${data[key].userId}>
        <td>${data[key].name}</td>
        <td>${data[key].option}</td>
        <td><button class="btn delete-btn">Delete</button></td>
      </tr>
    `);
  }
};

document.querySelector("#app").innerHTML = `
<div class="container">
    <div>
      <form>
        <input class="name" type="text" placeholder="Enter your name" />
        <select class="options">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <button type="submit" class="btn add-btn">Submit</button>
      </form>
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
  </div>
`;

$(document).ready(function () {
  $(".add-btn").click(function (e) {
    e.preventDefault();
    let name = $(".name").val();
    let option = $(".options").val();
    if (name == "" || option == "") {
      alert("Please fill in all fields");
    } else {
      writeUserData(name, option);
    }
  });
});

const deleteData = (id) => {
  remove(ref(database, "users/" + id));
};

$(document).on("click", ".delete-btn", function () {
  $(this).closest("tr").remove();
  const deleteData = (id) => {
    remove(ref(database, "users/" + id));
    deleteData($(this).closest("tr").attr("id"));
  };
});
