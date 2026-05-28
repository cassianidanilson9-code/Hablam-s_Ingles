document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const msg = this.message.value;

  window.location.href =
  `mailto:cassianidanilson9@gmail.com?subject=Contacto ${name}&body=${msg}%0A%0AEmail del usuario: ${email}`;
});