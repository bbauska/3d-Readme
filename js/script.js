/* 3d-Readme/js/script.js to place text "Todays news..." into constNews. */
const constNews = `<p>EVERY accusation by Republicans and President Trump is, in fact, a confession. Tax cuts 
for ONLY the very rich. Anyone with wealth of over 1 million now pays less taxes than the working man. 
There is nothing to celebrate on America's 250th anniversary thanks entirely to MAGA and the dumb in the USA. 
Two words, Fuck & You. Fuck You MAGA. Trump is a very useful idiot for Vladamir Putin. Dumb as a stump but he thinks 
otherwise. Easy to manipulate for Putin because they've been 'friends' since the early 1980's. Long history of Love and 
Repect if either could do either. -Brian Bauska (bbauska)</p>`;

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
