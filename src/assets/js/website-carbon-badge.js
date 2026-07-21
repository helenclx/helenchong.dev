const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
const websiteCarbonBadge = document.getElementById("wcb");

if (window.matchMedia && darkModePreference.matches) {
	websiteCarbonBadge.classList.add("wcb-d");
}

darkModePreference.addEventListener("change", (event) => {
	if (event.matches) {
		websiteCarbonBadge.classList.add("wcb-d");
	} else {
		websiteCarbonBadge.classList.remove("wcb-d");
	}
});
