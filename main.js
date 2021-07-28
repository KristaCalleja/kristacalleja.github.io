// Create an Object using Object Literal Syntax
const firstSlide = {
    paragraph: `" I grew up by the rocky coast of Malta, where I pursued a career as a government lawyer combatting illegal fisheries. In the past years, the urge to switch contexts and dive further into the tech world grew stronger. I love the creative process and the purposeful tasks programming entails. Nowadays, alongside my legal work, I keep my tech skills up to scratch freelancing. "`,
}
const secondSlide = {
    paragraph: `" I love working in partnership with other developers. Whether remotely or physically I am a clear communicator. Moreover I am fluent in English, Portuguese and Italian and have a working knowledge of German and Arabic. "`,
}
// Select elements
const imgElement = document.getElementById('profile-img');
const paragraphElement = document.getElementById('text-box');
// Select buttons for event handling
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
function loadFirstSlide(){
    imgElement.src = "images/IMG_6687.jpg";
    paragraphElement.innerText = `${firstSlide.paragraph}`;
}
function loadSecondSlide(){
    imgElement.src = "images/women in tech.png";
    paragraphElement.innerText = `${secondSlide.paragraph}`;
}
// Set default load
window.onload = loadFirstSlide;
// Set event handlers on controls
previousBtn.addEventListener('click', loadFirstSlide);
nextBtn.addEventListener('click', loadSecondSlide);