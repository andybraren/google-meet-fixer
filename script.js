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

:root {
  --opacity-full: 1;
  --opacity-inactive: .5;
}

/* Footer bar */
.rG0ybd {
	opacity: 1;
	transform: translateY(0);
  transition: opacity 100ms;
  transition: background-color 250ms !important;
	background-color: #fff0;
	box-shadow: none;
}

.rG0ybd:hover {
  background-color: #00000061;
}

.rG0ybd:hover {
  --opacity-inactive: .8;
}

/* Top bar */
.lvE3se, .NzPR9b {
  background-color: #fff0;
  transition: background-color 250ms !important;
  box-shadow: none;
}
.lvE3se:hover {
  background-color: #00000061;
}

/* Divider line */
.qO3Z3c {
  opacity: .5;
}

/* Top Bar Icons */
.NzPR9b .NPEfkd {
  color: white;
  opacity: var(--opacity-inactive);
  transition: opacity 250ms !important;
}
.NzPR9b .NPEfkd:hover {
  opacity: var(--opacity-full);
  transition: opacity 250ms !important;
}


/* Name */
.lMHHZ {
	/* transform: translateY(-88px); */
	background-image: none !important;
}

/* Meeting Name and Caret */
.gSlHI .SQHmX > * {
  color: white;
  opacity: var(--opacity-inactive);
  transition: opacity 250ms;
}
.gSlHI:hover .SQHmX > * {
  opacity: 1;
  transition: opacity 250ms;
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
  opacity: var(--opacity-inactive);
  transition: opacity 250ms !important;
}
.A00RE:hover .bkbMM {
  fill: white !important;
  opacity: 1;
  transition: opacity 250ms !important;
}
.ZPasfd {
  border-color: transparent;
}

/* Red buttons */
.uJNmj.FTMc0c {
  border: none;
  background-color: rgba(217, 48, 37, .6);
}

/* Captions */
.n8i9t > * {
  color: white;
  opacity: var(--opacity-inactive);
  transition: opacity 250ms;
}
.n8i9t:hover > * {
  opacity: 1;
  transition: opacity 250ms;
}

/* Present */
.XMjwIe > * {
  color: white;
}
.XMjwIe:hover > * {
  opacity: 1;
  transition: opacity 250ms;
}
.o9fq9d { /* Icon */
  color: white;
}

/* Kebab */
.NlWrkb {
  color: white;
  opacity: var(--opacity-inactive);
  transition: opacity 250ms;
}
.NlWrkb:hover {
  opacity: 1;
  transition: opacity 250ms;
}
`;
document.head.appendChild(style);

}