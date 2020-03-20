import { cleanData } from './data.js';

//Tabla se carga al cargar la página
window.onload = () => {
  createTable();
}

const createTable = () => {
  let showTable = document.getElementById('tab-content-table');
  let table = document.createElement('table');
  table.className = 'table';
  let tableBody = document.createElement('tbody');
  tableBody.className = 'tableBody'
  table.border = '1';
  table.appendChild(tableBody);
  
  //Header de la tabla
  let heading = ['Nombre', 'Fecha de nacimiento', 'Teléfono', 'Dirección'];
  let trHeader = document.createElement('tr');
  trHeader.className = 'tableHeader'
  tableBody.appendChild(trHeader);
  for (let i = 0; i < heading.length; i++){
    let th = document.createElement('th')
    th.className = 'thHeader'
    th.appendChild(document.createTextNode(heading[i]));
    trHeader.appendChild(th);
  }

 //Contenido de la tabla
  for (let i = 0; i < cleanData.length; i++) {
  let tr = document.createElement('tr');
  tr.className = 'trBody'

  let tdName = document.createElement('td');
  let clickName = document.createElement('button');
  clickName.appendChild(document.createTextNode(cleanData[i].name));
  clickName.className = 'clickName';
  tdName.className = 'tdBody'
  tdName.appendChild(clickName);
  tr.appendChild(tdName);
  tableBody.appendChild(tr);
    
  let tdBirthdate = document.createElement('td');
  tdBirthdate.className = 'tdBody'
  tdBirthdate.appendChild(document.createTextNode(cleanData[i].birthDate));
  tr.appendChild(tdBirthdate);
  tableBody.appendChild(tr);

  let tdPhone = document.createElement('td');
  tdPhone.className = 'tdBody'
  tdPhone.appendChild(document.createTextNode(cleanData[i].phone));
  tr.appendChild(tdPhone);
  tableBody.appendChild(tr);

  let tdAddress = document.createElement('td');
  tdAddress.className = 'tdBody'
  tdAddress.appendChild(document.createTextNode(cleanData[i].address));
  tr.appendChild(tdAddress);
  tableBody.appendChild(tr);

  showTable.appendChild(table);
}
  openModal(cleanData, cardPatient);
 }

 //Interacción por paciente
let cardPatient = document.getElementsByClassName('clickName');

const openModal = (cleanData, cardPatient) => {
  
  for (let i = 0; i < cardPatient.length; i++) {
    cardPatient[i].addEventListener('click', () => {
      document.getElementById('cardContainer').style.display='block';
      document.getElementById('cardContainer').innerHTML = `
      <div id="modal1" class="modal">
          <div class="infoPatient">
            <h4 class ="titlePatient"><b>${cleanData[i].name}</b></h4>
              <ul> 
                <li>ID: <b>${cleanData[i].id}</b></li>
                <li>Sexo: <b>${cleanData[i].gender}</b></li>
                <li>Fecha de nacimiento: <b>${cleanData[i].birthDate}</b></li>
                <li>Teléfono: <b>${cleanData[i].phone}</b></li>
                <li>Dirección: <b>${cleanData[i].address}</b></li>
                <li>Estado civil: <b>${cleanData[i].maritalStatus}</b></li>
                <li>Idioma: <b>${cleanData[i].language}</b></li>
                <li>Etnia: <b>${cleanData[i].etnia}</b></li>
              </ul>
        </div>
        <div class="close">
          <b>X</b>
        </div>
      </div>
      `
    });
}
}



//Filtro por paciente, falta aplicarlo en la tabla
let newCleanData = cleanData.map((cleanData) => {
  return cleanData.name;
});
//console.log(newCleanData.sort())
const filterDataName = (typeName) => {
  return newCleanData.filter((el) => {
    return el.toLowerCase().indexOf(typeName.toLowerCase()) > -1;
  });
}
console.log(filterDataName("Ca"));
