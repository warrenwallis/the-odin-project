import "./styles.css";

const slides = document.getElementById("slides");
const slideWidth = document.querySelector(".slide").clientWidth; // Get width of one image
const indexButtons = document.getElementById("index-buttons");
let index = 0;

updateIndexButton();

document.getElementById("next").addEventListener("click", () => {
	if (index < slides.children.length - 1) {
		index++;
	} else {
		index = 0; // Loop back to first image
	}
	updateCarousel();
	updateIndexButton();
});

document.getElementById("prev").addEventListener("click", () => {
	if (index > 0) {
		index--;
	} else {
		index = slides.children.length - 1; // Loop back to last image
	}
	updateCarousel();
	updateIndexButton();
});

function updateCarousel() {
	slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

function updateIndexButton() {
	Array.from(indexButtons.children).forEach((element, idx) => {
		if (idx === index) {
			element.style.background = "var(--primary-color)";
		} else {
			element.style.background = "white";
		}
	});
}
