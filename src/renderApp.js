import { renderProjects } from './renderProjects';
import { renderList } from './renderList';
import { renderForm } from './renderForm';
import { model } from './model';

const renderApp = (() => {
	let selectedId = 0;
	const render = () => {
		const addButton = document.querySelector('.new-button');
		const projects = document.querySelectorAll('.column-btn');

		addButton.addEventListener('click', () => {
			renderForm.remove();
			renderForm.show('project');
		});	

	}

	// Initial default display
	renderProjects.render();
	renderList.render(selectedId);

	// Add event listeners
	window.addEventListener('click', (e) => {
		switch (e.target.className) {
			case 'button addProject':
				if (model.validateProjectForm()) {
					model.createProject();
					renderForm.remove();
					renderProjects.render();
				}
				break;
			case 'button addItem':
				if (model.validateItemForm()) {
					model.createItem(selectedId);
					renderForm.remove();
				}
				renderList.render(selectedId);
				break;
			case 'button cancel':
				renderForm.remove();
				break;
			case 'new-item-btn':
				selectedId = document.querySelector('.column-btn-selected').dataset.id;
				renderForm.remove();
				renderForm.show('item');
				break;
			case 'editProjectBtn':
				renderForm.remove();
				renderForm.show('project', selectedId);
				break;
			case 'column-btn':
				renderProjects.toggleProjects(e);
				selectedId = parseInt(e.target.attributes[1].value);
				break;
			case 'button update-project-btn':
				console.log('updating...');
				model.updateProject(selectedId);
				renderForm.remove();
				break;

		}
	});

	return { render };
})();

export { renderApp };
