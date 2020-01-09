import { renderProjects } from './renderProjects';
import { renderList } from './renderList';
import { renderForm } from './renderForm';
import { validateProjectForm, validateItemForm } from './model';

const renderApp = (() => {
	
	
	const render = () => {
		const addButton = document.querySelector('.new-button');
		const projects = document.querySelectorAll('.column-btn');

		addButton.addEventListener('click', () => {
			renderForm.remove();
			renderForm.show('project');
		});	

		projects.forEach(project => {
			project.addEventListener('click', () => {
				projects.forEach(item => item.classList.remove('column-btn-selected'));
				project.classList.add('column-btn-selected');
				
				const id = project.dataset.id;
				renderList.render(id);
			})
		})
	}

	// Initial default display
	renderProjects.render();
	renderList.render(0);

	// Add event listeners
	window.addEventListener('click', (e) => {
		switch (e.target.className) {
			case 'button addProject':
				if (validateProjectForm()) {
					// getProjectFormData();
					// addToProjects();
					renderForm.remove();
				}
				break;
			case 'button addItem':
				if (validateItemForm()) {
					//getItemFormData();
					// addToItems();
					renderForm.remove();
				}
				break;
			case 'button cancel':
				renderForm.remove();
				break;
			case 'new-item-btn':
				renderForm.remove();
				renderForm.show('item');
				break;
		}
	});


	return { render };
})();

export { renderApp };
