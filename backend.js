function buttonCounterPlus() {
  localStorage.counter++
  document.getElementById("result").innerHTML = localStorage.counter
}

function buttonCounterMinus() {
  localStorage.counter--
  document.getElementById("result").innerHTML = localStorage.counter
}

