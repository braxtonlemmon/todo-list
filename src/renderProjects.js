// import { sampleData } from './sampleData';
import { model } from './model';
import { renderList } from './renderList';

const renderProjects = (() => {
	const main = document.querySelector('.main');
	const column = document.createElement('div');
	// let id = 0;

	const render = () => {
		if (main.childElementCount < 2) {
			_makeColumn();
			_seedColumn();
			const initial = column.firstElementChild;
			initial.classList.add('column-btn-selected');
		} else {
			_seedColumn();
		}
	}
	
	// PRIVATE

	const _makeColumn = () => {
		column.classList.add('projects-column');
		main.appendChild(column);
	}

	const _seedColumn = () => {
		const projects = model.projects;
		_makeProjectBtn(projects[projects.length - 1]);
	}

	const _makeProjectBtn = (project) => {
		const button = document.createElement('div');
		button.textContent = project.title;
		button.classList.add('column-btn');
		button.dataset.id = project.id;
		button.addEventListener('click', toggleProjects);
		column.appendChild(button);
	}

	const toggleProjects = (e) => {
		const button = e.target;
		const projects = document.querySelectorAll('.column-btn');
		projects.forEach(btn => btn.classList.remove('column-btn-selected'));
		button.classList.add('column-btn-selected');

		const id = button.dataset.id;
		renderList.render(id);
	}

	return { render };
})();

export { renderProjects };

