import "../theme/semantic.less"

const load = () => {
}

document.addEventListener("DOMContentLoaded", load)

if (module.hot) {
  module.hot.accept(".", load)
}
