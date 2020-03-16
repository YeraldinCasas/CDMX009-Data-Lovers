import { cleanData } from './data.js';

//Tabla
window.onload = () => {
  createTable();
}

const createTable = () => {
  let showTable = document.getElementById('tab-content-table');
  let table = document.createElement('table');
  table.className = 'table';
  let tableBody = document.createElement('tbody');
  table.border = '1';
  table.appendChild(tableBody);

  //COLUMNAS DE LA TABLA
  let heading = ['Nombre', 'Fecha de nacimiento', 'Teléfono', 'Dirección'];
  let trHeader = document.createElement('tr');
  trHeader.className = 'tableHeader'
  tableBody.appendChild(trHeader);
  for (let i = 0; i < heading.length; i++) {
    let th = document.createElement('th')
    th.appendChild(document.createTextNode(heading[i]));
    trHeader.appendChild(th);
  }

 //FILAS DE LA TABLA
  for (let i = 0; i < cleanData.length; i++) {
  let tr = document.createElement('tr');
  let tdName = document.createElement('td');

  let clickName = document.createElement('button');
  clickName.appendChild(document.createTextNode(cleanData[i].name));
  clickName.addEventListener('click', () => openModal())
  clickName.className = '';
  tdName.appendChild(clickName);
  tr.appendChild(tdName);
  tableBody.appendChild(tr);

  let tdBirthdate = document.createElement('td');
  tdBirthdate.appendChild(document.createTextNode(cleanData[i].birthDate));
  tr.appendChild(tdBirthdate);
  tableBody.appendChild(tr);

  let tdPhone = document.createElement('td');
  tdPhone.appendChild(document.createTextNode(cleanData[i].phone));
  tr.appendChild(tdPhone);
  tableBody.appendChild(tr);

  let tdAddress = document.createElement('td');
  tdAddress.appendChild(document.createTextNode(cleanData[i].address));
  tr.appendChild(tdAddress);
  tableBody.appendChild(tr);

  showTable.appendChild(table);

}
 }
 //Necesitamos que cuando se de click en el botón del paciente arroje una card con los datos del paciente
 //que se seleccionó, sin embargo arroja todos
const openModal = () => {
  for (let i = 0; i < cleanData.length; i++) {
    let inf = document.createElement("div")
    inf.innerHTML = `
    <div id="modal1" class="modal">
      <div clas="cardPatient">
        <div class="iconPatient"></div>
        <div clas="infoPatient">
          <h4 class ="titlePatient"><b>${cleanData[i].name}</b></h4>
            <ul>
              <li><b>ID:</b>${cleanData[i].id}</li>
              <li><b>Sexo:</b>${cleanData[i].gender}</li>
              <li><b>Fecha de nacimiento:</b>${cleanData[i].birthDate}</li>
              <li><b>Teléfono:</b>${cleanData[i].phone}</li>
              <li><b>Idioma:</b>${cleanData[i].language}</li>
              <li><b>Dirección:</b>${cleanData[i].address}</li>
            </ul>
        </div>
      </div>
    </div>
    `
    console.log(inf);
    document.getElementById('cardContainer').appendChild(inf)
}

}


//No hemos podido hacer funcionar el filtro, ya tomamos muchos ejemplos pero nada :(

  function searchPatient() {
    // Declare variables 
    let textUser = document.getElementById("#input");
    let compare = cleanData.filter(textUser);

    for (i = 0; i < cleanData.includes; i++) {

    }
  }

