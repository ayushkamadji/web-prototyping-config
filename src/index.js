import _ from "lodash"
import printMe from "./print"

function component() {
  let element = document.createElement("div")
  let button = document.createElement("button")
  
  button.innerHTML = "Click Me!"
  button.onclick = printMe
  element.innerHTML = _.join(["Dello", "webpack"], " ")
  element.setAttribute("id", "root")
  element.appendChild(button)

  return element
}

const diffLoad = () => {
  const root = document.getElementById("root")
  document.body.replaceChild(component(), root)
}

document.addEventListener("DOMContentLoaded", diffLoad)

if (module.hot) {
  module.hot.accept(".", diffLoad)
}
