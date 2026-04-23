/* 3d-Readme/js/script.js to place text "Todays news..." into constNews. */
const constNews = `<p>EVERY accusation by Republicans and President Trump is, in fact, a confession. Tax cuts 
for ONLY the very rich. Anyone with wealth of over 1 million now pays less taxes than the working man or woman. 
There is nothing to celebrate on America's 250th anniversary thanks entirely to MAGA and the dumb fucks who voted 
for MAGA. Two words, #1 Fuck & #2 You. Fuck You MAGA. Trump is a very useful idiot to Vladamir Putin. Dumb as a 
stump but thinks otherwise. Easy to manipulate because they've been 'friends' since the early 1980's. Long history 
of Love and Respect if either could even define love or respect. Just one of thousands of examples of Trump's grift; 
Trump paid 41 million for an estate in Florida. Then sold it to a Russian oligarch for 95 million dollars in less 
than a year, No way that was legal. Of the 341.7 million Americans, how many are effected by Trump's policies? 
Every single one of the 341.7 million. ALL. Of the 341.7 million Americans, how many are being NEGATIVELY EFFECTED 
by Trump's policies? 341.699. In other wordes, everyone except the .0001% are being screwed over by this one 
mans tax policies (tariffs) &amp; his sycophants. Fuck them ALL. Indict them all. I want justice. I deserve justice 
for the 341.699 million Americans who made this nation what it is today. Not for those fuck-faces who are bulldozing it.
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
