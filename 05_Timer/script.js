const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;
let startDuration = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    circle.setAttribute("stroke", "red");
    startDuration = durationInput.value;
    currentOffset = -(perimeter / startDuration);
  },
  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset -= perimeter / startDuration;
  },
  onComplete() {
    circle.setAttribute("stroke-dasharray", perimeter);
    circle.setAttribute("stroke-dashoffset", 0);
    circle.setAttribute("stroke", "green");
  }
});
