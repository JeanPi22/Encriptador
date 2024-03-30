/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function encrypt() {
  // Capturar el texto del <textarea>
  let textAreaEncrypt = document.getElementById("text-encrypt").value;
  let textEncrypt = ""; //Variable para almacenar el texto que se encripta

  for (let i = 0; i < textAreaEncrypt.length; i++) {
    switch (textAreaEncrypt[i]) {
      case "a":
        textEncrypt += "ai";
        break;
      case "e":
        textEncrypt += "enter";
        break;
      case "i":
        textEncrypt += "imes";
        break;
      case "o":
        textEncrypt += "ober";
        break;
      case "u":
        textEncrypt += "ufat";
        break;
      default:
        textEncrypt += textAreaEncrypt[i];
    }
  }
  //Se muestra el texto encriptado en el <textarea> del panel derecho.
  document.getElementById("text-copy").value = textEncrypt;
}

function decrypt() {

}

function textCopy() {
  // Capturar el texto del <textarea>
  let textAreaCopy = document.getElementById("text-copy").value;
  // Escribir el texto en el portapapeles
  navigator.clipboard.writeText(textAreaCopy)
  .then(() => {
    alert("Texto copiado: " + textAreaCopy);
  })
  .catch(err => {
    console.error("Error al copiar texto ", err);
  })
}