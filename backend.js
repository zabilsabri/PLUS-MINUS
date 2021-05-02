function buttonCounterPlus() {
  if (localStorage.counter){
    localStorage.counter = Number(localStorage.counter)+1
  } else {
    localStorage.counter = 1
  }
  document.getElementById("result").innerHTML = localStorage.counter
}

function buttonCounterMinus() {
  if (localStorage.counter){
    localStorage.counter = Number(localStorage.counter)-1
  } else {
    localStorage.counter = -1
  }
  document.getElementById("result").innerHTML = localStorage.counter
}

