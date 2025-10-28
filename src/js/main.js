import "@scss/style.scss";

const elDarkmodeToggleButton = document.querySelector("#btnDarkmode");

let colorThemeIsDark = false;
elDarkmodeToggleButton.addEventListener("click", () => {
	colorThemeIsDark = !colorThemeIsDark;
	elDarkmodeToggleButton.classList.toggle("on");
	if (colorThemeIsDark)
		document.documentElement.setAttribute("data-color-theme", "dark");
	else document.documentElement.setAttribute("data-color-theme", "light");
});
