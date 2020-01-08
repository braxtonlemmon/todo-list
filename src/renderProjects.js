import { sampleData } from './sampleData.js';

const renderProjects = (() => {
	const main = document.querySelector('.main');
	const column = document.createElement('div');

	const render = () => {
		_makeColumn();
		_seedColumn();
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
		column.appendChild(button);
	}

	return { render };
})();

export { renderProjects };

