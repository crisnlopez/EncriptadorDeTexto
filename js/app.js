const textInput = document.getElementById("text_input")
const infoAlert = document.getElementById("info_alert")

const btnEncriptar = document.getElementById("btn_encriptar")
const btnDesencriptar = document.getElementById("btn_desencriptar")
const btnCopiar = document.getElementById("btn_copiar")

const outputDiv = document.getElementById("output-container")
const noMsg = document.getElementById("no_msg")
const msgEncriptado = document.getElementById("msg_encriptado")
const muniecoImg = document.querySelector("img[src='img/munieco.svg']")
const notificacion = document.getElementById("notificacion")

const noPermitido = ['á','é','í','ó','ú','?','/','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','`','~','|','\\']
const ingresaTexto = "Ingresa el texto que desees encriptar o desencriptar."

// Funciones
const encriptar = () => {
  let s = textInput.value.toLowerCase()

  // Check vacio
  if (s === "") {
    mostrarInicio()
    return
  }

  // Check input valido
  let valido = inputValido(s)
  if (!valido) {return}

  s = s.replaceAll('e', 'enter')
  s = s.replaceAll('i', 'imes')
  s = s.replaceAll('a', 'ai')
  s = s.replaceAll('o', 'ober')
  s = s.replaceAll('u', 'ufat')

  // Check mismo encriptado
  if (s === msgEncriptado.innerText) {return}

  // Check si es un msg distinto
  if (msgEncriptado.innerText !== ingresaTexto && s !== msgEncriptado.innerText) {
    msgEncriptado.innerText = s
    return
  }

  mostrarMsg(s)
}

const desencriptar = () => {
  let s = textInput.value

  // Check vacio
  if (s === "") {
    mostrarInicio()
    return
  }

  // Check input valido
  let valido = inputValido(s)
  if (!valido) {return}

  s = s.replaceAll('enter','e')
  s = s.replaceAll('imes','i')
  s = s.replaceAll('ai','a')
  s = s.replaceAll('ober','o')
  s = s.replaceAll('ufat','u')

  mostrarMsg(s)
}

const inputValido = input => {
  for (let c of noPermitido) {
    if (input.includes(c)) {
      return false
    }

    return true
  }
}

const mostrarMsg = input => {
  muniecoImg.classList.add("display-none")
  noMsg.classList.add("display-none")
  btnCopiar.classList.remove("display-none")
  outputDiv.classList.add("output-content")
  msgEncriptado.classList.add("msg-encriptado")

  msgEncriptado.innerText = input
}

const mostrarInicio = () => {
  muniecoImg.classList.remove("display-none")
  noMsg.classList.remove("display-none")
  outputDiv.classList.remove("output-content")
  msgEncriptado.classList.remove("msg-encriptado")
  btnCopiar.classList.add("display-none")

  msgEncriptado.innerText = ingresaTexto
}

async function copiarTexto() {
  try {
    await navigator.clipboard.writeText(msg_encriptado.innerText)
      .then(() =>{
        notificar('Texto copiado')
      })
      .catch(notificar)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const notificar = value => {
  clearTimeout(notificar.timer)

  if (notificacion.hidden) notificacion.textContent = value

  notificacion.hidden = false
  notificar.timer = setTimeout(() => {notificacion.hidden = true}, 3000)
}

// Eventos
btnEncriptar.addEventListener("click", encriptar)
btnDesencriptar.addEventListener("click",desencriptar)
btnCopiar.addEventListener("click", copiarTexto)
