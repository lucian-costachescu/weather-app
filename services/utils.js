/**
 * Functie pentru a face o cerere catre un endpoint, si transformam raspunsul in JSON 
 * @param {string} input URL catre cererea noastra 
 * @returns Datele de la cererea noastra, transformate in obiect
 */
async function fetchAndParse(input) {
  const response = await fetch(input);
  return response.json();
}