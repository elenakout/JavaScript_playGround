const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

console.log(checkboxes);

function handleCheck(e) {
  console.log(e);

  //expected log:
  //MouseEvent {isTrusted: true, screenX: 607, screenY: 365, clientX: 31, clientY: 226, …}
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
