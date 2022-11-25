function ret() {
  let val = document.querySelector("input").value;
  let te = "";
  let te1 = "";
  for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
      te += i + ",";
    }
    if (i % 2) {
      te1 += i + ",";
    }
  }
  function total(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  // total = ((number + 1) / 2) * number;
  document.getElementById("juft").innerHTML = te;
  document.getElementById("toq").innerHTML = te1;
  document.getElementById("total").innerHTML = total(val);
  document.getElementById("val").innerHTML = sum;
}
