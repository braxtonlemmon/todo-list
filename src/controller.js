import { model } from './model.js';
import { renderForm } from './renderForm.js';
import { renderProjects } from './renderProjects.js';
import { renderList } from './renderList.js';

const controller = (() => {
	let selectedId = 0;
	const listen = () => {
		window.addEventListener('click', (e) => {
			switch (e.target.className) {
				// Open new project form
				case 'new-project-btn':
					renderForm.remove();
					renderForm.show('project');
					break;
					
				// Create new project
				case 'button create-project-btn':
					if (model.validateProjectForm()) {
						model.createProject();
						renderForm.remove();
						renderProjects.render();
					}
					break;

				// Open edit project form	
				case 'edit-project-btn':
					renderForm.remove();
					renderForm.show('project', selectedId);
					break;

				// Update project
				case 'button update-project-btn':
					model.updateProject(selectedId);
					renderForm.remove();
					break;

				// Open new item form
				case 'new-item-btn':
					selectedId = document.querySelector('.column-btn-selected').dataset.id;
					renderForm.remove();
					renderForm.show('item');
					break;

				// Create new item
				case 'button create-item-btn':
					if (model.validateItemForm()) {
						model.createItem(selectedId);
						renderForm.remove();
					}
					renderList.render(selectedId);
					break;

				// Cancel and close form
				case 'button cancel':
					renderForm.remove();
					break;

				// Select project from sidebar
				case 'column-btn':
					renderProjects.toggleProjects(e);
					selectedId = parseInt(e.target.attributes[1].value);
					break;	
			}
		});
	}

	return { listen };
})();

export { controller };


