let getHours = () => {
  const relogio = document.getElementById("relogio");

  const data = new Date();

  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  let hora = horas < 10 ? `0${horas}` : horas;
  let minuto = minutos < 10 ? `0${minutos}` : minutos;
  let segundo = segundos < 10 ? `0${segundos}` : segundos;

  relogio.innerHTML = `${hora}:${minuto}:${segundo}`;
};

setInterval(() => {
  getHours();
}, 1000);
