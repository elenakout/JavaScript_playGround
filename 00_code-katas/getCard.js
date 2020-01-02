// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

const cardValue = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const cardSuit = ["clubs", "spades", "hearts", "diamonds"];

function pick(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getCard() {
  return {
    value: cardValue[pick(cardValue)],
    suit: cardSuit[pick(cardSuit)]
  };
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
