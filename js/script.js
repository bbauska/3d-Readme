/* 3d-Readme/js/script.js to place text "Todays news..." into constNews. */
const constNews = `<p>EVERY accusation is a confession.
Jerk off the very rich. over 100 million. pay up assholes. pay up assholes. pay up assholes.
you know who you are.
Uncomfortable truth. MAGA are dumb fucks with way too much power. Jail time. Or, death.
There is nothing to celebrate on America's 250th anniversary thanks entirely by MAGA and the
dumb, truly, dumbest humans in the USA. Two words, Fuck & You. Fuck You MAGA.
Trump is a very useful idiot for Vladamir Putin. Dumb as a stump but thinks otherwise.
Easy to manipulate for Putin because they've been 'friends' since the early 1980's. Long
history of Love and Repect if either could do either. Which they can not.
Example; paid 41 million, sold next month 95 million. That aint legal. That ain't moral. Trump
has NO morals. None.
Of the 341.7 million Americans, how many are being affected? 341.7 million.
Of the 341.7 million Americans, how many are being NEGATIVELY EFFECTED by Trump's policies? 341.699.
In other wordes, everyone but the .0001% are being fucked by this one man &amp; his sycophants.
Fuck them ALL.
Indict them all. I want justice. I deserve justice for the 341.699 million Americans who made this nation
what it is today. Not for those fuck-faces who are bulldozing it.
     -Brian Bauska (bbauska)</p>`;

// Function to insert constNews into divs
function insertconstNews() {
  // Get all .text divs
  const textDivs = document.querySelectorAll(".text");

  // Insert constNews into all .text divs
  textDivs.forEach((div) => {
    div.innerHTML = constNews;
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertconstNews);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor =
    viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
