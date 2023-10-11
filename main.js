import "./style.css";

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
      const currentContent = $(".table").html();
      $(".table").html(
        currentContent +
          `<tr>
            <td>${name}</td>
            <td>${option}</td>
            <td>
              <button class="btn delete-btn">Delete</button>
            </td>
          </tr>`
      );
      $(".name").val("");
      $(".options").val("");
    }
  });
});

$(document).on("click", ".delete-btn", function () {
  $(this).closest("tr").remove();
});
