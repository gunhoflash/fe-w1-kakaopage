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

function hide(str) {
  find(str).forEach(element => {
    element.classList.add('d-none')
  })
}

function hideOne(str) {
  findOne(str).classList.add('d-none')
}

function show(str) {
  find(str).forEach(element => {
    element.classList.remove('d-none')
  })
}

function hideOne(str) {
  findOne(str).classList.remove('d-none')
}

/*

  nav item selection

*/

function initNavItems() {
  find('.nav-item').forEach(element => {
    element.addEventListener('click', clickNavItem)
    if (element.dataset.selected === 'true') {
      selectNavItem(element)
    }
  })
}

function clickNavItem(e) {
  selectNavItem(e.target)
}

function selectNavItem(navItem) {
  const navSelector = navItem.dataset.nav

  // focus off all elements
  find(`[data-nav=${navSelector}]`).forEach(element => {
    element.dataset.selected = 'false'

    // hide the target
    hide(element.dataset.target)
  })
  
  // focus on the element
  navItem.dataset.selected = 'true'
  
  // show the target
  show(navItem.dataset.target)
}

/*

  init

*/

initNavItems()