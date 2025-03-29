const clock =document.querySelector('#clock')

let date = new Date()
let hours = date.getHours()     
let minutes = date.getMinutes()
let seconds = date.getSeconds() 

let ampm = hours >= 12 ? 'PM' : 'AM'
hours = hours % 12      
hours = hours ? hours : 12 // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes // the minutes '0' should be '00'      
seconds = seconds < 10 ? '0' + seconds : seconds // the seconds '0' should be '00'
let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm
clock.innerHTML = strTime

setInterval(() =>{
    let date = new Date()
    let hours = date.getHours()     
    let minutes = date.getMinutes()
    let seconds = date.getSeconds() 

    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12      
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes // the minutes '0' should be '00'      
    seconds = seconds < 10 ? '0' + seconds : seconds // the seconds '0' should be '00'
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm
    clock.innerHTML = strTime   
    
},1000);