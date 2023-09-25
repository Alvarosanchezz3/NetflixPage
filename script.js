// Obtén las referencias a los id de los elementos HTML
let bell = document.getElementById("bell");
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let img_usuario = document.getElementById("img-usuario");

let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let usuario = document.getElementById("usuario");

let pop_up1 = document.getElementById("pop-up1");
let pop_up2 = document.getElementById("pop-up2");

function changeImage(img, imageEnter, imageLeave) {
  img.addEventListener("mouseenter", function () {
    img.src = imageEnter;
  });

    img.addEventListener("mouseleave", function () {
      img.src = imageLeave;
  });
};

changeImage(bell, "img/header/bell-ringing.png", "img/header/bell.png",)

// Función para cambiar imagen y visibilidad del menú si el puntero esta dentro o fuera
function changeImageAndMenu(menu, img, pop_up, imageEnter, imageLeave) {
  menu.addEventListener("mouseenter", function () {
    pop_up.style.visibility = "visible";
    img.src = imageEnter;
    });

  menu.addEventListener("mouseleave", function () {
    pop_up.style.visibility = "hidden";
    img.src = imageLeave;
  });

  pop_up.addEventListener("mouseenter", function () {
    pop_up.style.visibility = "visible";
    img.src = "img/header/arrow-up.png";
  });
  
  pop_up.addEventListener("mouseleave", function () {
    pop_up.style.visibility = "hidden";
    img.src = "img/header/arrow-down.png";
  });
  
}
changeImageAndMenu(menu1, arrow1, pop_up1, "img/header/arrow-up.png", "img/header/arrow-down.png");
changeImageAndMenu(usuario, arrow2, pop_up2, "img/header/arrow-up.png", "img/header/arrow-down.png");
changeImageAndMenu(menu2, arrow2, pop_up2, "img/header/arrow-up.png", "img/header/arrow-down.png");

// Funcionalidad del video
function toggleVideo () {
    const trailer = document.querySelector(".trailer");
    const  video = document.querySelector("video");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
