//Functions sadawndna

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = math.evaluate(display.value);
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "1") {
    appendToDisplay("1");
  }
  if (event.key === "2") {
    appendToDisplay("2");
  }
  if (event.key === "3") {
    appendToDisplay("3");
  }
  if (event.key === "4") {
    appendToDisplay("4");
  }
  if (event.key === "5") {
    appendToDisplay("5");
  }
  if (event.key === "6") {
    appendToDisplay("6");
  }
  if (event.key === "7") {
    appendToDisplay("7");
  }
  if (event.key === "8") {
    appendToDisplay("8");
  }
  if (event.key === "9") {
    appendToDisplay("9");
  }
  if (event.key === "0") {
    appendToDisplay("0");
  }
  if (event.key === "+") {
    appendToDisplay("+");
  }
  if (event.key === "*") {
    appendToDisplay("*");
  }
  if (event.key === "-") {
    appendToDisplay("-");
  }
  if (event.key === "/") {
    appendToDisplay("/");
  }
  if (event.key === ".") {
    appendToDisplay(".");
  }
  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  if (event.key === "=") {
    calculate();
  }
  if (
    event.key === "C" ||
    event.key === "CE" ||
    event.key === "c" ||
    event.key === "ce"
  ) {
    display.value = "";
  }
});