let overlay = document.getElementById("overlay");
let kYuYCF = document.getElementById("kYuYCF");

function ToggleVI() {
  overlay.innerHTML = `
    <video id="myVideo"
      class="fade"
      src="./assate/Vedio/1434659529640-260ouz-1727736763057.mp4"
      autoplay
      controls
      playsinline
      onended="videoFinished()"
    ></video>
  `;
  overlay.style.zIndex = "0";
  kYuYCF.style.display = "none";
}

function videoFinished() {
  ToggleVI();
  overlay.innerHTML = `<img src="./assate/imame/MV5BNDNjMWI2YTEtMDk0My00ZGUyLWFiZDItOTQ2NTY1MjJkMDNjXkEyXkFqcGdeQXNvbG5vbXM@._V1_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" />`;

  kYuYCF.style.display = "flex";
}
