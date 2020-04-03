import data from './data/patient/patient.js';
  export let cleanData = [];
  
 /* 1.- Acces to entry object, patients list  Accedemos al objeto entry, 
  lista de pacientes y recorrmos cada elemento */
  data.entry.map(iterator)
/*  2.- function that receives c / item and we access the data we want and store it in a new object, 
 we put that new object inside an array */
  function iterator(item){
    let obj = {
      id: item.resource.id,
      name: item.resource.name[0].given[0]+" "+item.resource.name[0].family[0],
      gender: item.resource.gender,
      birthDate: item.resource.birthDate,
      maritalStatus: item.resource.maritalStatus.text,
      phone: item.resource.telecom[0].value,
      language: item.resource.communication[0].language.coding[0].display,
      etnia: item.resource.extension[1].valueCodeableConcept.coding[0].display,
      address: item.resource.address[0].line[0]+", "+item.resource.address[0].city+", "+item.resource.address[0].state+", "+item.resource.address[0].postalCode,
      death: item.resource.deceasedDateTime,
    }
    cleanData.push(obj)
  }
/* Filter by name */
  const filters = {
    filterByName(enterName){
      return cleanData.filter(cleanData => {
          return cleanData.name.toLowerCase().includes(enterName.toLowerCase())
      });
    }
  };
  export default filters;
