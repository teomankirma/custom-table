export const renderTable = (data) => {
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
