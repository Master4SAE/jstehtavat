const targetElement = document.getElementById("target");

const li1 = document.createElement("li");
li1.textContent = "First item";

const li2 = document.createElement("li");
li2.textContent = "Second item";
li2.classList.add("my-item"); 

const li3 = document.createElement("li");
li3.textContent = "Third item";

targetElement.appendChild(li1);
targetElement.appendChild(li2);
targetElement.appendChild(li3);
