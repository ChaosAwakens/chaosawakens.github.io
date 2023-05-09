document.addEventListener("DOMContentLoaded", () => {
		fetch(`dev_team.html`)
			.then(response => response.text())
			.then(html => document.querySelector(`#dev_team`).innerHTML = html);
});