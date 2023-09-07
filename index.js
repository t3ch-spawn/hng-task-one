const dayArray = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const date = new Date()
const dateEl = document.querySelector('.day')

dateEl.textContent = `${dayArray[date.getDay()]}`


console.log(date.getDay())