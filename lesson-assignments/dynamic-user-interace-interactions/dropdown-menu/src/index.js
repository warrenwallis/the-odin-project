import "./styles.css";

const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownButton = document.getElementById("dropdown-button");
dropdownButton.addEventListener("click", () => {
	if (dropdownMenu.style.display === "") {
		dropdownMenu.style.display = "flex";
	} else {
		dropdownMenu.style.display = "";
	}
});

const menuButtons = document.getElementsByClassName("menu-buttons");
Array.from(menuButtons).forEach((element) => {
	element.addEventListener("click", () => {
		window.alert(`Clicked ${element.textContent}`);
	});
});
