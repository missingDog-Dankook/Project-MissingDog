window.onload = function () {
  init()
}

// add this function, so the transition would only start running when the page has been fully loaded. This is a fallback in case when someone has turned off their JavaScript.

function init() {
  var menu = document.getElementById('menu')
  menu.classList.add('transition-after-pageload')
}
