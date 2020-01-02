// Select element function
const selectElement = function(element) {
  return document.querySelector(element);
};

const inputname = selectElement("#name");
const itemsUl = selectElement("#items");

inputname.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    // add aitm to list
    // this.value
    const newItem = document.createElement("li");
    newItem.innerText = this.value;
    itemsUl.appendChild(newItem);
    this.value = "";
  }
});

// FORM

const form = selectElement("#signup-form");
const creditCardInput = selectElement("#cc");
const termsCheckbox = selectElement("#terms");
const colorSelect = selectElement("#color");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // we can extract all data from the form
  const cc = creditCardInput.value;
  const terms = termsCheckbox.checked;
  const color = colorSelect.value;

  // Send form data to db
  // append something to page using form data
});

// We can keep realtime the input values
// We use input event
const formData = {};

// creditCardInput.addEventListener("input", e => {
//   console.log("CC changed", e);
//   formData["cc"] = e.target.value;
// });
// colorSelect.addEventListener("input", e => {
//   console.log("Color changed", e);
//   formData["color"] = e.target.value;
// });

// termsCheckbox.addEventListener("input", e => {
//   console.log("Checkbox", e);
//   formData["terms"] = e.target.checked;
// });

// Another way
for (let input of [creditCardInput, termsCheckbox, colorSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;

    formData[name] = type === "checkbox" ? checked : value;
  });
}

//Change event
for (let input of [creditCardInput, termsCheckbox, colorSelect]) {
  input.addEventListener("change", ({ target }) => {
    const { name, type, value, checked } = target;

    formData[name] = type === "checkbox" ? checked : value;
  });
}
