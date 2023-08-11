function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

document.getElementById("email").onclick = function () {
  alert(
    "Entre em contato comigo pelo email: gustavohenriquefsilva2003@gmail.com"
  )
}
