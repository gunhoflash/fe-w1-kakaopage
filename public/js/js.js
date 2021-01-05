setTimeout(() => {
  location.href = ''
}, 5000);

/*

  common functions

*/

function find(str) {
  return document.querySelectorAll(str)
}

function findOne(str) {
  return document.querySelector(str)
}

/*

  nav item selection

*/
find('.nav-item')
.forEach(element => {
  element.addEventListener('click', selectNavItem)
})

function selectNavItem(e) {
  const nav = e.target.dataset.nav

  find(`[data-nav=${nav}]`)
  .forEach(element => {
    element.removeAttribute('selected')
  })

  e.target.setAttribute('selected', null)
}

