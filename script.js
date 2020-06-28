if (document.querySelector('.rG0ybd') !== null) {
  run();
}

function run() {

// Find the mic button
if (document.querySelector('[aria-label="Turn off microphone (⌘ + d)"]') !== null) {
  var micButton = document.querySelector('[aria-label="Turn off microphone (⌘ + d)"]');
} else {
  var micButton = document.querySelector('[aria-label="Turn on microphone (⌘ + d)"]');
}

var micButton = document.querySelector('[aria-label="Turn off microphone (⌘ + d)"]') || document.querySelector('[aria-label="Turn on microphone (⌘ + d)"]')

// Mute the mic to start
/*
if (micButton.dataset.isMuted === "false") {
  micButton.click();
}
*/

var spacebarDown = false;

// Check on every key down
document.onkeydown = function(e) {
  var chatField = document.getElementsByClassName("KHxj8b")[0]; // Ignore everything if the chat field is active
  if (document.activeElement !== chatField && e.key === ' ' && spacebarDown == false) {
    spacebarDown = true;
    if (micButton.dataset.isMuted === "true") {
      micButton.click();
    }
  }
};

// Listen for space key up and when released mute the mic
document.onkeyup = function (e) {  
  if (e.key === ' ' && spacebarDown == true) {
    spacebarDown = false;
    if (micButton.dataset.isMuted === "false") {
      micButton.click();
    }
  }
};

// Add custom styling to footer
const style = document.createElement('style');
style.innerHTML = `

/* Footer bar */
.rG0ybd {
	opacity: 1;
	transform: translateY(0);
	transition: opacity 100ms;
	background-color: black;
	background-color: #fff0;
	box-shadow: none;
}

/* Name */
.lMHHZ {
	/* transform: translateY(-88px); */
	background-image: none !important;
}

/* Meeting Name and Caret */
.gSlHI .SQHmX > * {
  color: white;
  opacity: .5;
  transition: opacity 500ms;
}
.gSlHI:hover .SQHmX > * {
  opacity: 1;
  transition: opacity 500ms;
}

/* Video and Mic buttons */
.A00RE {
  border: none;
}
.A00RE.jY9Dbb .bkbMM { /* While active */
  opacity: 1;
}
.bkbMM { /* Icon */
  fill: white !important;
  opacity: .5;
  transition: opacity 500ms !important;
}
.A00RE:hover .bkbMM {
  fill: white !important;
  opacity: 1;
  transition: opacity 500ms !important;
}

/* Red buttons */
.uJNmj.FTMc0c {
  border: none;
  background-color: rgba(217, 48, 37, .6);
}

/* Captions */
.n8i9t > * {
  color: white;
  opacity: .5;
  transition: opacity 500ms;
}
.n8i9t:hover > * {
  opacity: 1;
  transition: opacity 500ms;
}

/* Present */
.XMjwIe > * {
  color: white;
}
.XMjwIe:hover > * {
  opacity: 1;
  transition: opacity 500ms;
}
.o9fq9d { /* Icon */
  color: white;
}

/* Kebab */
.NlWrkb {
  color: white;
  opacity: .5;
  transition: opacity 500ms;
}
.NlWrkb:hover {
  opacity: 1;
  transition: opacity 500ms;
}
`;
document.head.appendChild(style);

}