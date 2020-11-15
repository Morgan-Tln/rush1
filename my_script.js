document.getElementById("contact-form").addEventListener("submit", function(e){
    var erreur;
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var birthday = document.getElementById("birthday");

if (!birthday.value) {
      erreur = "Veuillez renseigner une date de naissance";
}

if (!email.value) {
      erreur = "Veuillez renseigner un email";
}

if (!name.value) {
 erreur = "Veuillez renseigner un nom";
}


if (erreur) {
  e.preventDefault();
  document.getElementById("erreur").innerHTML = erreur;
  return false;
} else {
  alert('Formulaire envoyé !');
}

});
