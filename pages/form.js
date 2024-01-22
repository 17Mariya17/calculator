// Use insert() function to insert the number in textview.
function insert(num) {
  document.calc.input_form.value = document.calc.input_form.value + num;
}

// Use equal() function to return the result based on passed values.
function equal() {
  var exp = document.calc.input_form.value;
  if (exp) {
    document.calc.input_form.value = eval(exp);
  }
}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace() {
  var exp = document.calc.input_form.value;
  document.calc.input_form.value = exp.substring(
    0,
    exp.length - 1
  ); /* remove the element from total length ? 1 */
}
