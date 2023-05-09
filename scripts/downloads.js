document.addEventListener("DOMContentLoaded", () => {
	const containers = document.querySelectorAll('.container');

	containers.forEach(container => {
		const header = container.querySelector('.header');
		const name = container.querySelector('.name');
		const content = container.querySelector('.content');
		const arrow = container.querySelector('.arrow');

		arrow.addEventListener('click', () => {
			header.classList.toggle('show');
			content.classList.toggle('show');
			arrow.classList.toggle('rotate');
		});

		name.addEventListener('click', () => {
			header.classList.toggle('show');
			content.classList.toggle('show');
			arrow.classList.toggle('rotate');
		});

		content.addEventListener('click', () => {
			header.classList.toggle('show');
			content.classList.toggle('show');
			arrow.classList.toggle('rotate');
		});
	});
});