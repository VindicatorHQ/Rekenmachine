var GetalInvoer;
var GetalTot;
var Resultaat;

function add1() {
  document.getElementById('input1').value +="1";
}

function add2() {
  document.getElementById('input1').value += "2";
}

function add3() {
  document.getElementById('input1').value += "3";
}

function add4() {
  document.getElementById('input1').value += "4";
}

function add5() {
  document.getElementById('input1').value += "5";
}

function add6() {
  document.getElementById('input1').value += "6";
}

function add7() {
  document.getElementById('input1').value += "7";
}

function add8() {
  document.getElementById('input1').value += "8";
}

function add9() {
  document.getElementById('input1').value += "9";
}

function add0() {
  document.getElementById('input1').value += "0";
}

function addcomma() {
  document.getElementById('input1').value += ",";
}

function add() {
  GetalInvoer = parseInt(document.getElementById('input1').value);
  GetalTot = parseInt(document.getElementById('input2').value);

  Resultaat = GetalInvoer + GetalTot;
  document.getElementById ("resultaat").innerHTML = Resultaat;
  if (window.innerWidth < 600) {
    if (Resultaat > 100000000) {
      document.getElementById ("resultaat").innerHTML = "Too large for screen!";
    }
  }
}

function subtract() {
  GetalInvoer = parseInt(document.getElementById('input1').value);
  GetalTot = parseInt(document.getElementById('input2').value);

  Resultaat = GetalInvoer - GetalTot;
  document.getElementById ("resultaat").innerHTML = Resultaat;
  if (window.innerWidth < 600) {
    if (Resultaat > 100000000) {
      document.getElementById ("resultaat").innerHTML = "Too large for screen!";
    }
  }
}

function multiply() {
  GetalInvoer = parseInt(document.getElementById('input1').value);
  GetalTot = parseInt(document.getElementById('input2').value);

  Resultaat = GetalInvoer * GetalTot;
  document.getElementById ("resultaat").innerHTML = Resultaat;

  if (window.innerWidth < 600) {
    if (Resultaat > 100000000) {
      document.getElementById ("resultaat").innerHTML = "Too large for screen!";
    }
  }
}

function divide() {
  GetalInvoer = parseInt(document.getElementById('input1').value);
  GetalTot = parseInt(document.getElementById('input2').value);

  Resultaat = GetalInvoer / GetalTot;
  document.getElementById ("resultaat").innerHTML = Resultaat;
  if (window.innerWidth < 600) {
    if (Resultaat > 100000000) {
      document.getElementById ("resultaat").innerHTML = "Too large for screen!";
    }
  }
}

function square() {
    GetalInvoer = parseInt(document.getElementById('input1').value);
    GetalTot = parseInt(document.getElementById('input2').value);

    Resultaat = Math.pow(GetalInvoer,GetalTot);
    document.getElementById("resultaat").innerHTML = Resultaat;
    if (window.innerWidth < 600) {
      if (Resultaat > 100000000) {
        document.getElementById ("resultaat").innerHTML = "Too large for screen!";
      }
    }
}

function squareroot() {
    GetalInvoer = parseInt(document.getElementById('input1').value);

    Resultaat = Math.sqrt(GetalInvoer);
    document.getElementById("resultaat").innerHTML = Resultaat;

    if (window.innerWidth < 600) {
      if (Resultaat > 100000000) {
        document.getElementById ("resultaat").innerHTML = "Too large for screen!";
      }
    }
}

function percentage() {
    GetalInvoer = parseInt(document.getElementById('input1').value);
    GetalTot = parseInt(document.getElementById('input2').value);

    Resultaat = GetalInvoer % GetalTot;
    document.getElementById("resultaat").innerHTML = Resultaat;
    if (window.innerWidth < 600) {
      if (Resultaat > 100000000) {
        document.getElementById ("resultaat").innerHTML = "Too large for screen!";
      }
    }
}

function Wissen() {
  document.getElementById("resultaat").innerHTML = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}
