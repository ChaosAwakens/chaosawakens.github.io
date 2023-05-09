document.addEventListener("DOMContentLoaded", () => {
	fetch('../versions.json')
		.then(response => response.json())
		.then(data => {
			data.versions.forEach(version => {
				fetch(`../version_changelogs/chaos-awakens-${version}.html`)
					.then(response => response.text())
					.then(html => document.querySelector(`#chaos-awakens-${version}`).innerHTML = html);
			});
		});
});