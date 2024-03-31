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
  
  textAreaEncrypt = textAreaEncrypt.toLowerCase();  

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
  document.getElementById("text-encrypt").value = "";
  
}

function decrypt() {
  const keysDictionary = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
  };

  // Capturar el texto del <textarea>
  let textAreaEncrypt = document.getElementById("text-encrypt").value;
  let textDecrypt = ""; //Variable para almacenar el texto que se desencripta  

  let i = 0;
  while (i < textAreaEncrypt.length) {
    let equal = false;
    //Cuando se encuentra una coincidencia, "equal" se cambia a "true", lo que nos indica que se ha encontrado una coincidencia y que no es necesario continuar buscando.
    for (let key in keysDictionary) {
      //Se busca coincidencias
      if (textAreaEncrypt.substring(i, i + key.length) === key) {
        textDecrypt += keysDictionary[key];
        i += key.length;
        equal = true;
        break;
      }      
    }
    if (!equal) {
      textDecrypt += textAreaEncrypt[i];
      i++;
    }
  }

  //Se muestra el texto desencriptado en el <textarea> del panel derecho.
  document.getElementById("text-copy").value = textDecrypt;  
  document.getElementById("text-encrypt").value = "";
}

function textImage() {
  const image = document.getElementById("imageText");
  const textEncrypt = document.getElementById("text-encrypt");
  const textCopy = document.getElementById("txtcopy");

  // Verifica si el contenido del <textarea> "text-encrypt" está vacío.
  // Y cambia el estado de los <display>
  if (textEncrypt.value.trim() === "") {
    image.style.display = "block";
    textCopy.style.display = "none";
  } else {
    image.style.display = "none";
    textCopy.style.display = "block";
  }
}

function textCopy() {
  // Capturar el texto del <textarea>
  let textAreaCopy = document.getElementById("text-copy").value;
  // Escribir el texto en el portapapeles
  navigator.clipboard.writeText(textAreaCopy)
  .then(() => {
    console.log("Texto copiado: " + textAreaCopy);
  })
  .catch(err => {
    console.error("Error al copiar texto ", err);
  })
}