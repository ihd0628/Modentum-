const clock = document.querySelector("#clock");

function timer() {
    const date = new Date();
    const hours = date.getHours().toString(); 
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();
    clock.innerText = `${hours.padStart(2,0)}:${minutes.padStart(2,0)}:${seconds.padStart(2,0)}`;
}


timer();

setInterval(timer,1000);
