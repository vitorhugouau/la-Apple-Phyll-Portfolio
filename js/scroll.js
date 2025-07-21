// const svg = document.querySelector('svg.squiggle')
// const path = svg.querySelector('path')

// const scroll = () => {
//   const distance = window.scrollY
//   const totalDistance = svg.clientHeight - window.innerHeight

//   const percentage = distance / totalDistance

//   const pathLength = path.getTotalLength()

//   path.style.strokeDasharray = `${pathLength}`
//   path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`
// }

// scroll()
// window.addEventListener('scroll', scroll)

const svg = document.querySelector('svg.squiggle')
const path = svg.querySelector('path')

const scroll = () => {
  const distance = window.scrollY
  const pathLength = path.getTotalLength()

  const speedFactor = 1.8 

  let offset = pathLength - distance * speedFactor
  if (offset < 0) offset = 0

  path.style.strokeDasharray = `${pathLength}`
  path.style.strokeDashoffset = `${offset}`
}

scroll()
window.addEventListener('scroll', scroll)
 