document.getElementById("menu-button").addEventListener("click", function () {
	document.querySelector(".menu").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
	document.querySelector(".menu").style.display = "none";
});
