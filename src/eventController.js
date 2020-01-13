import { model } from './model.js';
import { renderForm } from './renderForm.js';
import { renderProjects } from './renderProjects.js';
import { renderList } from './renderList.js';

const controller = (() => {
	let selectedId = 0;
	let itemId = 0;
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
					const project = model.getProject(selectedId);
					model.updateProject(selectedId);
					renderProjects.updateProjectBtn(selectedId, project.title);
					renderForm.remove();
					break;

				// Destroy project
				case 'destroy-project-btn':
					model.destroyProjectItems(selectedId);
					model.destroyProject(selectedId);
					renderProjects.destroyProject(selectedId);
					renderList.clearList();
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

				// Open edit item form
				case 'item-edit': 
					itemId = parseInt(e.target.parentNode.attributes[1].value);
					renderForm.remove();
					renderForm.showItemForm(itemId);
				
					// const data = model._getItemFormData();
					// renderList.updateItemRow(id, data);
					// renderForm.remove();
					// renderForm.show('item', id);
					break;
				
				// Update item
				case 'button update-item-btn':
					console.log(itemId);
					model.updateItem(itemId);
					const data = model._getItemFormData();
					console.log(data);
					renderList.updateItemRow(itemId, data);
					renderForm.remove();
					break;

				// Destroy individual item
				case 'item-remove':
					const itId = parseInt(e.target.parentNode.attributes[1].value);
					model.destroyItem(itId);
					renderList.destroyItem(itId);
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


