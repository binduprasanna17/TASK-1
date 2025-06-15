
    let display = document.getElementById("display");
    let current = "";
    let lastAns = "";

    function appendChar(char) {
      if (display.innerText === "0" && char !== ".") {
        current = char;
      } else {
        current += char;
      }
      display.innerText = current;
    }

    function clearDisplay() {
      current = "";
      display.innerText = "0";
    }

    function delChar() {
      current = current.slice(0, -1);
      display.innerText = current || "0";
    }

    function getAns() {
      current += lastAns;
      display.innerText = current;
    }

    function toggleSign() {
      if (current) {
        if (current[0] === '-') {
          current = current.slice(1);
        } else {
          current = '-' + current;
        }
        display.innerText = current;
      }
    }

    function calculate() {
      try {
        let result = eval(current.replace('x', '*'));
        lastAns = result;
        display.innerText = result;
        current = result.toString();
      } catch (e) {
        display.innerText = "Error";
        current = "";
      }
    }
 