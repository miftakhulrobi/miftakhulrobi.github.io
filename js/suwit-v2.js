function getPilihanComputer() {
  var comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;

//   //   console.log("comp : " + pilihanComputer);
//   //   console.log("player : " + pilihanPlayer);
//   //   console.log(hasil);
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;

//   //   console.log("comp : " + pilihanComputer);
//   //   console.log("player : " + pilihanPlayer);
//   //   console.log(hasil);
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;

//   //   console.log("comp : " + pilihanComputer);
//   //   console.log("player : " + pilihanPlayer);
//   //   console.log(hasil);
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let x = 0;

  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval();
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[x++] + ".png");
    if (x == gambar.length) x = 0;
  }, 100);
}

const pilihan = document.querySelectorAll(".rounded");
pilihan.forEach(function(i) {
  i.addEventListener("click", function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = i.getAttribute("alt");

    putar();
    setTimeout(function() {
      const hasil = getHasil(pilihanComputer, pilihanPlayer);

      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
    //   console.log("comp : " + pilihanComputer);
    //   console.log("player : " + pilihanPlayer);
    //   console.log(hasil);
  });
});
