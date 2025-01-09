// Arreglo para almacenar los archivos
let filesArray = [];

function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const output = document.getElementById('output');
  const fileList = document.getElementById('fileList');

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Agregar el archivo al arreglo
      filesArray.push({
        name: file.name,
        content: e.target.result
      });

      // Actualizar la lista de archivos guardados
      updateFileList();

      output.innerHTML = `<p>Archivo cargado: ${file.name}</p>`;
    }
    reader.readAsDataURL(file);
  } else {
    output.innerHTML = `<p>No se ha seleccionado ningún archivo.</p>`;
  }
}

function updateFileList() {
  const fileList = document.getElementById('fileList');
  fileList.innerHTML = '';

  // Crear elementos de lista para cada archivo
  filesArray.forEach(file => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${file.name}
      <a href="${file.content}" download="${file.name}">Descargar</a>
    `;
    fileList.appendChild(li);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const calendarElement = document.getElementById('calendar');
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Generar los días del mes actual
  function generateDays(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.textContent = day;

      // Resaltar la fecha actual
      if (day === currentDate.getDate() && month === currentMonth && year === currentYear) {
        dayElement.classList.add('today');
      }

      calendarElement.appendChild(dayElement);
    }
  }

  generateDays(currentMonth, currentYear);
});
