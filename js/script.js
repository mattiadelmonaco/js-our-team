// Dato un array di oggetti rappresentante un team di un’azienda, 
// creare una pagina dedicata in cui mostrare una card per ciascun componente.

// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina

// DOM ELEMENTS

const teamCardsList = document.getElementById("team-cards-list")


// VARIABLES

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// LOGIC

let memberCards = ""
for (let i = 0; i < teamMembers.length; i++) {
  const {name, role, email, img} = teamMembers[i]
  memberCards += `
<div class="col-12 col-md-6 col-lg-4">
  <div class="ms-card bg-black d-flex">
      <div class="zoom">
          <img class="img-fluid" src="${img}" alt="${name}">
      </div>
      <div class="ms-card-info py-lg-0 d-flex flex-column justify-content-between">
          <div>
          <h4 class="pt-lg-2 pt-xl-3">${name}</h4>
          <p class="pb-lg-2">${role}</p>
          </div>
          <a class="pb-lg-0 pb-xl-2" href="#">${email}</a>
      </div>
  </div>
</div>
`
}
  
teamCardsList.innerHTML = memberCards