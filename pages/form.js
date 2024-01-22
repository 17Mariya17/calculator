function insert(num) {
  document.calc.input_form.value = document.calc.input_form.value + num;
}

function equal() {
  let exp = document.calc.input_form.value;
  if (exp) {
    document.calc.input_form.value = eval(exp);
  }
}

function backspace() {
  let exp = document.calc.input_form.value;
  document.calc.input_form.value = exp.substring(0, exp.length - 1);
}
