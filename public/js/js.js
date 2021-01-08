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

function showOne(str) {
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
  selectNavItem(e.currentTarget)
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

  carousel

*/

function initCarousel() {
  find('.carousel').forEach(element => {
    const carouselId = element.getAttribute('id')
    const items = find(`#${carouselId} .carousel-item`)
    const carouselInfo = {
      index: 0,
      items: items,
      nItems: items.length,
      isOnTransition: false,
    }

    // add click event listener to prev button
    findOne(`#${carouselId} .carousel-button-prev`)
    .addEventListener('click', () => showNextCarouselItem(carouselInfo, true))

    // add click event listener to next button
    findOne(`#${carouselId} .carousel-button-next`)
    .addEventListener('click', () => showNextCarouselItem(carouselInfo))

    // show first item
    showNextCarouselItem(carouselInfo)

    // set interval event
    setInterval(() => showNextCarouselItem(carouselInfo), 5000)
  })
}

function showNextCarouselItem(carouselInfo, isReversed = false) {
  const { items, nItems, isOnTransition } = carouselInfo
  let { index } = carouselInfo

  // prevent duplicated transition
  if (isOnTransition) return
  carouselInfo.isOnTransition = true

  // set index
  if (isReversed)
    index--
  else
    index++
  index = (index + nItems) % nItems
  carouselInfo.index = index

  // find items to transit
  const prevItem = items[(index - 1 + nItems) % nItems]
  const nowItem = items[index]
  const nextItem = items[(index + 1) % nItems]

  // remove all prev/active/next classes
  items.forEach(item => {
    item.classList.remove('prev')
    item.classList.remove('active')
    item.classList.remove('next')
    item.classList.remove('reverse')
  })

  // add prev/active/next class
  prevItem.classList.add('prev')
  nowItem.classList.add('active')
  nextItem.classList.add('next')

  // add reverse class
  if (isReversed) {
    prevItem.classList.add('reverse')
    nowItem.classList.add('reverse')
    nextItem.classList.add('reverse')
  }

  // end of transition
  setTimeout(() => {
    carouselInfo.isOnTransition = false
  }, 300)
}

/*

  init

*/

initNavItems()
initCarousel()