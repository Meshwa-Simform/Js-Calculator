import { clearHistory } from "./history.js";

export function reply(clicked_id)
{
    var input = document.querySelector('input');

    var value = document.getElementById(clicked_id).getAttribute("value");
    
    if(value === 'nd'){
        toggle_text();
    }
    else if(value === 'cl'){
        input.value = '';
        document.getElementById('result').innerHTML="";
    }
    else if(value === 'bs'){
        input.value = input.value.slice(0,-1);
    }
    else if(clicked_id === 'clear-history'){
      clearHistory();
    }
    else{
        input.value += value;
    }
}
//togle fuction to toggle buttons when 2nd is clicked
function toggle_text() {
  var x = document.getElementById("2");
  if (x.innerHTML === "π") {
    x.innerHTML = "2<sup>x</sup>";
    x.value = "2^(";

  } else {
    x.innerHTML = "π";
    x.value = "π";
  }

  var x = document.getElementById("3");
  if (x.innerHTML === "e") {
    x.innerHTML = "x<sup>3</sup>";
    x.value = "^3";

  } else {
    x.innerHTML = "e";
    x.value = "e";
  }

  var x = document.getElementById("7");
  if (x.innerHTML === "sin") {
    x.innerHTML = "sin<sup>-1</sup>";
    x.value = "asin(";

  } else {
    x.innerHTML = "sin";
    x.value = "sin(";
  }

  var y = document.getElementById("8");
  if (y.innerHTML === "cos") {
    y.innerHTML = "cos<sup>-1</sup>";
    y.value = "acos(";

  } else {
    y.innerHTML = "cos";
    y.value = "cos("
  }

  var z = document.getElementById("9");
  if (z.innerHTML === "tan") {
    z.innerHTML = "tan<sup>-1</sup>";
    z.value = "atan(";

  } else {
    z.innerHTML = "tan";
    z.value = "tan("
  }

  var z = document.getElementById("6");
  if (z.innerHTML === "x<sup>2</sup>") {
    z.innerHTML = "sinh";
    z.value = "sinh(";

  } else {
    z.innerHTML = "x<sup>2</sup>";
    z.value = "^2"
  }

  var z = document.getElementById("11");
  if (z.innerHTML === "√x") {
    z.innerHTML = "cosh";
    z.value = "cosh(";

  } else {
    z.innerHTML = "√x";
    z.value = "√("
  }

  var z = document.getElementById("16");
  if (z.innerHTML === "x<sup>y</sup>") {
    z.innerHTML = "tanh";
    z.value = "tanh(";

  } else {
    z.innerHTML = "x<sup>y</sup>";
    z.value = "^("
  }

  var z = document.getElementById("21");
  if (z.innerHTML === "|x|") {
    z.innerHTML = "sinh<sup>-1</sup>";
    z.value = "asinh(";

  } else {
    z.innerHTML = "|x|";
    z.value = "abs("
  }

  var z = document.getElementById("26");
  if (z.innerHTML === "log") {
    z.innerHTML = "cosh<sup>-1</sup>";
    z.value = "acosh(";

  } else {
    z.innerHTML = "log";
    z.value = "log("
  }

  var z = document.getElementById("31");
  if (z.innerHTML === "ln") {
    z.innerHTML = "tanh<sup>-1</sup>";
    z.value = "atanh(";

  } else {
    z.innerHTML = "ln";
    z.value = "ln("
  }
}