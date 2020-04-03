import { cleanData } from './data.js';
import filter from './data.js';

window.onload = () => {
  createTable();
}
const createTable = (filteredList) => {
 /*  Table first time */
  let lista = [...cleanData]
  /* Filter */
  if(filteredList){
    lista = [...filteredList]
  }
  
  let showTable = document.getElementById('tab-content-table');
  showTable.innerHTML = "" // clean table
  showTable.innerHTML = `<div class="search">        
                          <input type="text" class="search-Box" id="typeName" placeholder="Paciente...">
                          <input type="button" class="search-Btn" id="search" value="Buscar">
                        </div>` // draw input again 
  setListener() // listener
  let table = document.createElement('table');
  table.className = 'table';
  let tableBody = document.createElement('tbody');
  tableBody.className = 'tableBody'
  table.border = '1';
  table.appendChild(tableBody);
  
/*   Table header */
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
/*  Table body */
  for (let i = 0; i < lista.length; i++) {
  let tr = document.createElement('tr');
  tr.className = 'trBody'
  let tdName = document.createElement('td');
  let clickName = document.createElement('button');
  clickName.appendChild(document.createTextNode(lista[i].name));
  clickName.className = 'clickName';
  tdName.className = 'tdBody'
  tdName.appendChild(clickName);
  tr.appendChild(tdName);
  tableBody.appendChild(tr);
    
  let tdBirthdate = document.createElement('td');
  tdBirthdate.className = 'tdBody'
  tdBirthdate.appendChild(document.createTextNode(lista[i].birthDate));
  tr.appendChild(tdBirthdate);
  tableBody.appendChild(tr);
  let tdPhone = document.createElement('td');
  tdPhone.className = 'tdBody'
  tdPhone.appendChild(document.createTextNode(lista[i].phone));
  tr.appendChild(tdPhone);
  tableBody.appendChild(tr);
  let tdAddress = document.createElement('td');
  tdAddress.className = 'tdBody'
  tdAddress.appendChild(document.createTextNode(lista[i].address));
  tr.appendChild(tdAddress);
  tableBody.appendChild(tr);
  showTable.appendChild(table);
}
  openModal(lista, cardPatient);
 }
/* Card patients */
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
        <div id="modalClose" class="modal-close">
          <a href="#"><b>X</b></a>
        </div>
      </div>
      `
      modalClose.onclick = () => {
        document.getElementById('cardContainer').style.display='none';
      }
    });
}
}
/* Filter by name */
let arrayPatients;
let searchPatient = () => {
  let enterName = document.querySelector("#typeName").value
  arrayPatients = filter.filterByName(enterName);
  createTable(arrayPatients);
}
/* Button */
function setListener(){
  let searchButton = document.getElementById("search");
  searchButton.addEventListener("click", searchPatient);
}
