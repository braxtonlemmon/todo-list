import { sampleData } from './sampleData.js';

const renderProjects = (() => {
	const main = document.querySelector('.main');
	const column = document.createElement('div');
	let id = 0;

	const render = () => {
		_makeColumn();
		_seedColumn();
		
		const initial = column.firstElementChild;
		initial.classList.add('column-btn-selected');
	}

	// PRIVATE

	const _makeColumn = () => {
		column.classList.add('projects-column');
		main.appendChild(column);
	}

	const _seedColumn = () => {
		const samples = sampleData.projects;
		samples.forEach(sample => _makeProjectBtn(sample));
	}

	const _makeProjectBtn = (project) => {
		const button = document.createElement('div');
		button.textContent = project;
		button.classList.add('column-btn');
		button.dataset.id = id++;
		column.appendChild(button);
	}

	return { render };
})();

export { renderProjects };

