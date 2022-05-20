const textInput = document.getElementById("text_input")
const infoAlert = document.getElementById("info_alert")
const btnEncriptar = document.getElementById("btn_encriptar")
const btnDesencriptar = document.getElementById("btn_desencriptar")

const noPermitido = ['á','é','í','ó','ú','?','/','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','`','~','|','\\']
const encriptado = ['a','e','i','o','u']

// Funciones
const encriptar = () => {
  let s = textInput.value.toLowerCase()

  for (let c of noPermitido) {
    if (s.includes(c)) {
      return
    }
  }

  s = s.replaceAll('e', 'enter')
  s = s.replaceAll('i', 'imes')
  s = s.replaceAll('a', 'ai')
  s = s.replaceAll('o', 'ober')
  s = s.replaceAll('u', 'ufat')

  console.log(s)

  //TODO: mostrar data
  textInput.value = ""
}

const desencriptar = () => {
  let s = textInput.value

  s = s.replaceAll('enter','e')
  s = s.replaceAll('imes','i')
  s = s.replaceAll('ai','a')
  s = s.replaceAll('ober','o')
  s = s.replaceAll('ufat','u')

  // TODO: mostrar data
  console.log(s)
}

// Eventos
btnEncriptar.addEventListener("click", encriptar)
btnDesencriptar.addEventListener("click",desencriptar)
