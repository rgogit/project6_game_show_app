// create variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.getElementById=('phrase');
const homePage = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const liveHeart = document.querySelectorAll('.tries img');
const endTitle = overlay.querySelector('h2');
const thePhrase = overlay.querySelector('h3');
const hiddenPhrase = document.querySelector('#phrase ul');
let missed = 0;
// create and intilize an phrases array
phrases = [
	'Let me find out for you',
	'I do not understand',
	'Singing for his supper',
	'Sailing into the sunset',
	'I have a headache',
	'Hang on to your hat',
	'Too much time on my hands',
	'Man overboard',
	'Out in the wild',
	'Hold onto your horses',
	'Turning water into wine',
	'Show me the money',
];
// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
homePage.style.display='none';                   
});
//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
	// choose random phrase from array
	const randomNumber = Math.floor(Math.random() * arr.length);
	const randomPhrase = arr[randomNumber];
    // split random phrase into a character array
	let phraseArray = randomPhrase.split('');
	// return new array of phrase characters
	return phraseArray;
};
// create addPhraseToDisplay function
const phraseArray = document.querySelector('#phrase ul');
function addPhraseToDisplay (arr)  {
  //create list li item loop
	for(let i =0; i < arr.length; i++) {     
		const li = document.createElement('li');
		phraseArray.appendChild(li);
		li.textContent = arr[i];
	// check if arr[i] = space, give it the class of "space", else give it the class "letter"
	if (arr[i] === ' '){
		li.classList.add("space");
		} else {
		li.classList.add("letter");
		}
	}
};
//get the value returned by the getRandomPhraseAsArray and save it to a variable
const randomArray = getRandomPhraseAsArray(phrases); 
// pass it to addPhraseToDisplay as an argument
addPhraseToDisplay(randomArray);
// checkLetter function
const letters = document.querySelectorAll('.letter');
const checkLetter = (button) => {
    let match = null;
    for (i = 0; i < letters.length; i++) {
      if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        match = true;
      }
    }
    return match;
};
//Add an event listener to the keyboard
qwerty.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const button = e.target;
		button.className = 'chosen';
		button.setAttribute('disabled', '');
		const letter = button.textContent;
		const letterFound = checkLetter(letter);
        // check value of letterFound variable
	if (letterFound === null) {
		liveHeart[missed].src = 'images/lostHeart.png';
		missed++;
	}
	checkWin();
	reset();
	};
});
//check if game is won or lost
function checkWin() {
	const totalLetters = document.querySelectorAll('.letter');
	const shownLetters = document.querySelectorAll('.show');
	// if # of letters with class "show" === # of letters with class "letter"
	if (shownLetters.length === totalLetters.length) {
		// show overlay screen with class "win" and appropriate text
		overlay.className.remove = 'show';
		overlay.className = 'win';
		overlay.style.display = 'flex';
		endTitle.textContent = 'You Won!';
		truePhrase();
		clearPhrase();
	} else if (missed > 4) { 
		// else show overlay screen with class "lose" and appropriate text
		overlay.className.remove = 'show';
		overlay.className = 'lose';
		overlay.style.display = 'flex';
		endTitle.textContent = 'Sorry, You Lose!';
		truePhrase();
		clearPhrase();
	}	
};
//clear phrase from screen, tiles were showing through overlay change
function clearPhrase(){
    while (hiddenPhrase.firstChild) {
		hiddenPhrase.removeChild(hiddenPhrase.firstChild);
	};
};
//optional- game reset
function reset () {
	startButton.textContent = 'Play Again';
	startButton.addEventListener('click', ()=> {
	location.reload();
	});
};   
//optional- show correct phrase
function truePhrase() {
	thePhrase.textContent = `The phrase was: ${hiddenPhrase.textContent}`;
};