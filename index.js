function calculate() {
  const totalAmount = document.getElementById("total-amount");
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const yearsInput = document.getElementById("years");

  let principal = Number(principalInput.value);
  let rate = Number(principal.value / 100);
  let years = Number(yearsInput.value);
}
