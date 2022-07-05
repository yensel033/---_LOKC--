const dayBox = document.querySelector("#dias");
const hourBox = document.querySelector("#horas");
const minuteBox = document.querySelector("#minutos");
const secondBox = document.querySelector("#segundos");
const millisecondbox = document.querySelector("#milisegundos");

// setTimeout(callback,time en ms) te ejecuta algo una sola
// vez despues de un tiempo x

/*
  setInterval(callback,time en milisegundo) 
  te va a ejecutar la funcion cada x tiempo en bucle
*/

// function
// () =>

const clock = () => {
  const date = new Date();

  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let millisecond = date.getMilliseconds();

  if (hours >= 13) {
    hours = hours - 12;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  dayBox.innerText = day;
  hourBox.innerText = hours;
  minuteBox.innerText = minutes;
  secondBox.innerText = seconds;
  millisecondbox.innerText = Math.floor(millisecond / 10);
};

setInterval(clock, 1);

// let horas = 7;
// let minutos = 0;
// let segundos = 0;

// function cargarSegundo() {
//   let txtSegundos;

//   if (segundos < 0) {
//     segundos = 59;
//   }

//   if (segundos < 10) {
//     txtSegundos = `0${segundos}`;
//   } else {
//     txtSegundos = segundos;
//   }
//   document.querySelector("#segundos").innerHTML = txtSegundos;
//   segundos--;
// }

// function cargarMinutos(segundos) {
//   let txtminutos;

//   if (segundos == -1 && minutos !== 0) {
//     setTimeout(() => {
//       minutos--;
//     }, 500);
//   } else if (segundos == -1 && minutos == 0) {
//     setTimeout(() => {
//       minutos = 59;
//     }, 500);
//   }
//   document.querySelector("#minutos").innerHTML = txtminutos;
//   minutos--;
// }

// function cargarHoras(segundos, minutos) {
//   let txtHoras;

//   if (segundos == -1 && minutos == 0 && horas !== 0) {
//     setTimeout(() => {
//       horas--;
//     }, 500);
//   } else if (segundos == -1 && minutos == 0 && horas == 0) {
//     setTimeout(() => {
//       horas = 2;
//     }, 500);
//   }

//   if (horas < 10) {
//     txtHoras = `0${horas}`;
//   } else {
//     txtHoras = horas;
//   }
//   document.querySelector("#horas").innerHTML = txtHoras;
// }

// setInterval(cargarSegundo, 1000);
// setInterval(() => cargarMinutos(segundos), 1000);
// setInterval(() => cargarHoras(segundos, minutos), 1000);
