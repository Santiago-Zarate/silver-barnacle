document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const tableBody = document.getElementById('tableBody');
  let data = [];

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const minimumSalary = document.getElementById('minimumSalary').value;

    if (minimumSalary < 10000) {
      alert('El salario mínimo debe ser al menos 10000 pesos');
      return;
    }

    data.push({
      name: name,
      email: email,
      message: message,
      minimumSalary: minimumSalary
    });

    renderTable();
    form.reset();
  });

  function renderTable() {
    tableBody.innerHTML = '';

    data.forEach(function (row) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${row.name}</td>
        <td>${row.email}</td>
        <td>${row.message}</td>
        <td>${row.minimumSalary}</td>
      `;
      tableBody.appendChild(newRow);
    });
  }