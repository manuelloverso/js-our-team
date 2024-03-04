const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(team);

//- Stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
  const singleMember = team[i];

  for (const key in singleMember) {
    //console.log(singleMember[key]);
  }
}

//- Stampare le stesse informazioni su DOM sottoforma di stringhe
const row = document.querySelector(".row");
console.log(row);

//Creo le colonne per ogni elemento dell'array
for (let i = 0; i < team.length; i++) {
  //console.log(singleMember);
  row.insertAdjacentHTML("beforeend", `<div class="col-12 col-md-4"></div>`);
}

const cols = document.querySelectorAll(".col-12");
console.log(cols);

//Aggiungo le stringhe di singoli oggetti in ogni colonna
for (let i = 0; i < cols.length; i++) {
  const singleCol = cols[i];
  const singleMember = team[i];

  for (const key in singleMember) {
    singleCol.innerHTML += singleMember[key];
  }
}
