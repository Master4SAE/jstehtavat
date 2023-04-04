'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const targetElement = document.getElementById("target");

const selectElement = document.createElement("select");

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const optionElement = document.createElement("option");
  optionElement.textContent = student.name;
  optionElement.value = student.id;
  selectElement.appendChild(optionElement);
}

targetElement.appendChild(selectElement);

