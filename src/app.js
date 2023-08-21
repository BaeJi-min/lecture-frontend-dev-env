import './style.css'
import nyancat from './nyancat.jpg'

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `<img src="${nyancat}" alt="nyancat">`
})

console.log(process.env.NODE_ENV)
console.log(TWO) //2
console.log(VERSION) // 'v.1.2.3'
console.log(PRODUCTION) // true
console.log(MAX_COUNT) // 999
console.log(api.domain) // 'http://dev.api.domain.com'