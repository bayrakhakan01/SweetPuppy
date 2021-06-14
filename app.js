const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
const body = document.querySelector("body").children;

// burada kareler saga sola dogru gitiyor -------------------------

//RIGHT
rightBtn.addEventListener("click", () => {
  const parents = document.querySelector(".parents").children;
  for (let i = 0; i < parents.length; i++) {
    /*   console.log(
      parents[i].children[0].classList.add("hide"),
      parents[i].appendChild(newCan)
    ); */

    if (parents[i].children[0].src.includes("sweet-puppy") == true) {
      if (i == 3) {
        body[0].classList.remove("hide");
        body[1].classList.add("gOsH");
        body[1].classList.add("element-animation");
        body[1].children[2].classList.add("hide");
        body[0].children[0].classList.remove("hide");
        body[0].children[1].classList.remove("hide");

        for (let k = 0; k < parents.length; k++) {
          parents[k].classList.add("hide");
        }

        word.classList.add("hide");
        gridContainer.classList.add("grid-container3");
        gridContainer.classList.remove("grid-container2");
        show();
        Mot();
      }
      if (i === parents.length - 1) {
        console.log("canim daha item yok basma RIGHT");
        break;
      }

      parents[i].children[0].src = "./img/stairs.png";
      parents[i].classList.remove("element-animation");
      parents[i].children[0].classList.remove("base");

      parents[i + 1].children[0].src = "./img/sweet-puppy.png";
      parents[i + 1].classList.add("element-animation");
      parents[i + 1].children[0].classList.add("base");

      break;
    }
  }
});

//LEFT
leftBtn.addEventListener("click", () => {
  const parents = document.querySelector(".parents").children;
  for (let i = 0; i < parents.length; i++) {
    if (parents[i].children[0].src.includes("sweet-puppy") == true) {
      if (i == 4) {
        body[0].classList.add("hide");
        body[1].classList.remove("gOsH");
        parents[4].classList.remove("hide");
      }
      if (i === 0) {
        console.log("canim daha item yok LEFT");
        break;
      }

      if (parents[i].children[0].classList.contains("sh") !== true) {
        parents[i].children[0].src = "./img/stairs.png";
        parents[i].children[0].classList.remove("base");
        parents[i].classList.remove("element-animation");
      }
      parents[i - 1].children[0].src = "./img/sweet-puppy.png";
      parents[i - 1].classList.add("element-animation");
      parents[i - 1].children[0].classList.add("base");
      break;
    }
  }
});
//-------------------------------------------------------------------

// Burada kelime secilip kareler olusturuluyor
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const gridContainer = document.querySelector(".grid-container");

const word = document.querySelector(".word");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inp1 = document.getElementById("inp1").value;

  for (let i = 0; i < inp1.length; i++) {
    const cells = document.createElement("DIV");
    cells.className = "created-div";
    cells.id = inp1[i];
    word.appendChild(cells);
  }

  form1.classList.add("hide");
  form2.classList.remove("hide");
  header.classList.add("hide");
  footer.classList.add("hide");
  /* footer.children[0].classList.add("hide"); */
  gridContainer.classList.add("grid-container2");
  gridContainer.classList.remove("grid-container");
  document.querySelector("#inp2").focus();
});

// Burada harf girilip tahmin yapiliyor

const checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const par = document.querySelector(".word").children;
  const inpVal = document.getElementById("inp2").value;
  let say = 0;

  for (let i = 0; i < par.length; i++) {
    const element = par[i].id;

    if (element == inpVal) {
      par[i].innerHTML = inpVal;
      say += 1;
    }
  }
  let count = 0;
  const parents = document.querySelector(".parents").children;
  for (let k = 0; k < par.length; k++) {
    if (par[k].textContent !== "") {
      count += 1;
    }

    if (par.length == count) {
      /* buraya win ekranini getir */
      body[0].classList.remove("hide");
      body[1].classList.add("yWsP");
      body[1].classList.add("element-animation");
      body[1].children[2].classList.add("hide");
      body[0].children[0].classList.remove("hide");
      body[0].children[0].src = "./img/win.png";
      body[0].children[1].classList.remove("hide");
      document.querySelector("#play").focus();

      for (let k = 0; k < parents.length; k++) {
        parents[k].classList.add("hide");
      }

      word.classList.add("hide");
      gridContainer.classList.add("grid-container3");
      gridContainer.classList.remove("grid-container2");
      show();
      Mot();
    }
  }

  if (say == 0) {
    const parents = document.querySelector(".parents").children;
    for (let i = 0; i < parents.length; i++) {
      if (parents[i].children[0].src.includes("sweet-puppy") == true) {
        if (i == 3) {
          body[0].classList.remove("hide");
          body[1].classList.add("gOsH");
          body[1].classList.add("element-animation");
          body[1].children[2].classList.add("hide");
          body[0].children[0].classList.remove("hide");
          body[0].children[1].classList.remove("hide");

          for (let k = 0; k < parents.length; k++) {
            parents[k].classList.add("hide");
          }

          word.classList.add("hide");
          gridContainer.classList.add("grid-container3");
          gridContainer.classList.remove("grid-container2");
          show();
          Mot();
        }
        if (i === parents.length - 1) {
          console.log("canim daha item yok basma RIGHT");
          break;
        }

        parents[i].children[0].src = "./img/stairs.png";
        parents[i].classList.remove("element-animation");
        parents[i].children[0].classList.remove("base");

        parents[i + 1].children[0].src = "./img/sweet-puppy.png";
        parents[i + 1].classList.add("element-animation");
        parents[i + 1].children[0].classList.add("base");

        break;
      }
    }
  } else {
    const parents = document.querySelector(".parents").children;
    for (let i = 0; i < parents.length; i++) {
      if (parents[i].children[0].src.includes("sweet-puppy") == true) {
        if (i == 4) {
          body[0].classList.add("hide");
          body[1].classList.remove("gOsH");
          parents[4].classList.remove("hide");
        }
        if (i === 0) {
          console.log("canim daha item yok LEFT");
          break;
        }

        if (parents[i].children[0].classList.contains("sh") !== true) {
          parents[i].children[0].src = "./img/stairs.png";
          parents[i].children[0].classList.remove("base");
          parents[i].classList.remove("element-animation");
        }
        parents[i - 1].children[0].src = "./img/sweet-puppy.png";
        parents[i - 1].classList.add("element-animation");
        parents[i - 1].children[0].classList.add("base");
        break;
      }
    }
  }
  say = 0;

  document.querySelector(".form2").reset();
  document.querySelector("#inp2").focus();
});

// ==========```` SHOW BUTTON ´´´´============== //
const show = () => {
  const mainWord = document.getElementById("main-word");
  mainWord.textContent = inp1.value;
  header.classList.remove("hide");
  /*  footer.children[0].classList.remove("hide"); */
  footer.classList.remove("hide");
};
const showBtn = document.getElementById("showBtn");
showBtn.addEventListener("click", show);

// ==========```` Footer Motivation ´´´´============== //

const motivated = [
  "'All our dreams can come true, if we have the courage to pursue them.' – Walt Disney",
  "'The secret of getting ahead is getting started.' – Mark Twain",
  "'The best time to plant a tree was 20 years ago. The second best time is now.' – Chinese Proverb",
  "'It’s hard to beat a person who never gives up.' – Babe Ruth",
  "'If people are doubting how far you can go, go so far that you can’t hear them anymore.' – Michele Ruiz",
  "'Everything you can imagine is real.'― Pablo Picasso",
  "'Do one thing every day that scares you.'― Eleanor Roosevelt",
  "'Whatever you are, be a good one.' ― Abraham Lincoln",
  "'Impossible is just an opinion.' – Paulo Coelho",
  "'If something is important enough, even if the odds are stacked against you, you should still do it.' – Elon Musk",
];
const cars = ["Saab", "Volvo", "BMW"];

const fH3 = document.querySelector("footer h3");

const Mot = () => {
  var ran = Math.floor(Math.random() * motivated.length);
  fH3.textContent = motivated[ran];
  document;
};

document.addEventListener("DOMContentLoaded", Mot(), false);

const playAgain = document.getElementById("play");

playAgain.addEventListener("click", (e) => {
  e.preventDefault();

  location.reload();
});
