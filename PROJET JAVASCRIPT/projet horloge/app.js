
// Horloge 


function heure(){
    const now  = new Date();
    let hours  = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hours  = hours  <10 ? "0" +hours  : hours;
    minute = minute <10 ? "0" +minute : minute;
    second = second <10 ? "0" +second : second;

    const timeString = `${hours} : ${minute} : ${second}`
    document.getElementById('clock').textContent = timeString;
    // console.log(now) test
}

heure();

setInterval(heure, 1000)