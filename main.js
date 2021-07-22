// Create an Object using Object Literal Syntax
const firstSlide = {
    paragraph: `" I grew up by the rocky coast of Malta, where I pursued a career as a government lawyer combatting illegal fisheries. In the past years, the urge to switch contexts and dive further into the tech world grew stronger. I love the creative process and the purposeful tasks programming entails. Nowadays, alongside my legal work, I keep my tech skills up to scratch freelancing. "`,
    name: "Krista Calleja",
    label: "Software Developer",
}
const secondSlide = {
    paragraph: `" I love working in partnership with other developers. Whether remotely or physically I am a clear communicator. Moreover I am fluent in English, Portuguese and Italian and have a working knowledge of German and Arabic. "`,
    name: "Krista Calleja",
    label: "Software Developer",
}
// Select elements
const imgElement = document.getElementById('profile-img');
const paragraphElement = document.getElementById('text-box');
const nameElement = document.getElementById('name');
const labelElement = document.getElementById('label');
// Select buttons for event handling
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
function loadFirstSlide(){
    imgElement.src = "images/IMG_6687.jpg";
    paragraphElement.innerText = `${firstSlide.paragraph}`;
    nameElement.innerText = `${firstSlide.name}`;
    labelElement.innerText = `${firstSlide.label}`;
}
function loadSecondSlide(){
    imgElement.src = "images/women in tech.png";
    paragraphElement.innerText = `${secondSlide.paragraph}`;
    nameElement.innerText = `${secondSlide.name}`;
    labelElement.innerText = `${secondSlide.label}`;
}
// Set default load
window.onload = loadFirstSlide;
// Set event handlers on controls
previousBtn.addEventListener('click', loadFirstSlide);
nextBtn.addEventListener('click', loadSecondSlide);