function addToDisplay(value) {
  if (document.querySelector(".display").textContent === "Error") {
    document.querySelector(".display").textContent = "";
  }
  document.querySelector(".display").textContent += value;
}

function clearDisplay() {
  document.querySelector(".display").textContent = "";
}

function square() {
  try {
    let result = eval(document.querySelector(".display").textContent);
    document.querySelector(".display").textContent = result * result;
  } catch (e) {
    document.querySelector(".display").textContent = "Error";
  }
}

function evaluateX() {
  try {
    let result = eval(document.querySelector(".display").textContent);
    if (result % 1 !== 0) {
      document.querySelector(".display").textContent = result.toFixed(2);
    } else {
      document.querySelector(".display").textContent = result;
    }
  } catch (e) {
    document.querySelector(".display").textContent = "Error";
  }
}
