function calculate() {
  //Cache using selectElementByID
  const totalAmount = document.getElementById("total-amount");
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const yearsInput = document.getElementById("years");
  //Cache using QuerySelector
  const header = document.querySelector(".header");

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100);
  let years = Number(yearsInput.value);

  //Event Listener, and Modify style of CSS
  header.addEventListener("click", function () {
    header.style.backgroundColor = "gold";
    header.style.color = "white";
  });

  // TRIED USING THE SIBLING RELATIONSHIP, COULD NOT FIGURE IT OUT
  // header.addEventListener('click', function() {
  //   let firstChild = parentDiv.firstChild;
  //   firstChild = parentDiv.firstElementChild;
  //   firstChild.innerText = 'First child has changed!';
  //   var secondChild = firstChild.nextElementSibling;
  //   secondChild.innerText = 'Second child has changed!';
  //   console.log(firstChild);
  //   console.log(lastChild);
  // });

  //Event Listener, and Modify HTML using innerHTML
  totalAmount.addEventListener("click", function () {
    yearsInput.style.backgroundColor = "gold";
    yearsInput.style.color = "black";
    totalAmount.innerHTML = "<strong>You've Clicked The Total Amount!</strong>";
  });

  if (principal < 0 || isNaN(principal)) {
    principal = 0;
    principalInput.value = 0;
  }
  if (rate < 0 || isNaN(rate)) {
    rate = 0;
    rateInput.value = 0;
  }
  if (years < 0 || isNaN(years)) {
    years = 0;
    yearsInput.value = 0;
  }

  //Iterate over collection of elements
  let colors = document.querySelectorAll(".label");
  colors.forEach(function (color) {
    color.style.backgroundColor = "gold";
  });

  const result = principal * Math.pow(1 + rate / 1, 1 * years);

  totalAmount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
}
