var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit:  'diamonds',
	cardImage: "images/kings-of-hearts.png"
},
{
	rank: 'king',
	suit:  'hearts',
	cardImage: "images/kings-of-hearts.png"
},
{
	rank: 'king',
	suit:  'diamonds',
	cardImage: "images/kings-of-hearts.png"
},
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId.rank]);
	cardsInPlay.push(cards[cardId.rank]);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length===2) {
	if (cardsInPlay[0]===cardsInPlay[2])
		alert("You found a match!");
	checkForMatch();
	} else {
		alert("Sorry, try again.");
	}
}
flipCard(0);
flipCard(2);