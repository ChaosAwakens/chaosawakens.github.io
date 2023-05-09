document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const navbar = document.querySelector(".navbar");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
		navbar.classList.toggle("active");
	})

	document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
		navbar.classList.remove("active");
	}))
});
