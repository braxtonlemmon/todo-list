import { renderProjects } from './renderProjects';
import { renderList } from './renderList';

const renderApp = (() => {
	const render = () => {
		const addButton = document.querySelector('.new-button');
		const projects = document.querySelectorAll('.column-btn');

		addButton.addEventListener('click', () => {
			console.log('new');
		});	

		projects.forEach(project => {
			project.addEventListener('click', () => {
				projects.forEach(item => item.classList.remove('column-btn-selected'));
				project.classList.add('column-btn-selected');
			})
		})
	}
	
	renderProjects.render();
	renderList.render();
	return { render };
})();

export { renderApp };
