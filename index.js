const countdown = document.getElementById("countdown")
const targetDate = new Date('Jan 18, 2020')
const birthday = false





let date = new Date()


let time = date.getTime()
let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let years = days * 365
displayDays = Math.round(time / years)
days_left = (Math.round((targetDate.getTime() - date.getTime())/days))
minutes_left = (Math.round((targetDate.getTime() - date.getTime())/minutes))
seconds_left = (Math.round((targetDate.getTime() - date.getTime())/1000))






const checkBirthday = () =>{
    if (date.getMonth() === 0 && date.getDate() === 18){
        return "YES!  Happy birthday Joey!"
    } else {
        return `Nope! But only ${seconds_left} seconds to go until the next one!`
    }
}

const clockCount = () =>{
  setInterval( () =>{
    seconds_left--
        if (date.getMonth() !== 0 || date.getDate() !== 18){
          countdown.innerHTML = `Nope! But only ${seconds_left} seconds to go until the next one!`
        }
  }, 1000)
}
countdown.innerHTML = checkBirthday()
clockCount()
