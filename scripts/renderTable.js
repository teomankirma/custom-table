export const renderTable = (data) => {
  const table = $(".table-body");
  const tableHead = $(".table-head");
  table.empty();
  if (!data) {
    tableHead.hide();
    table.append(`<h4 class="no-data">No data found!</h4>`);
    return;
  }
  tableHead.show();
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
