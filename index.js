const dayArray = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const date = new Date()
const dateEl = document.querySelector('.day')
const timeEl = document.querySelector('.time')

dateEl.textContent = `${dayArray[date.getDay()]}`
timeEl.textContent = `${date.getTime()}`
