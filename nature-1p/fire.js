const imageArray = [
    "../img/fire-win.png",
    "../img/water-win.png",
    "../img/fire-tie.png",
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}