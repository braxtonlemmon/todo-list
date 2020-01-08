import { renderProjects } from './renderProjects';
import { renderList } from './renderList';

const renderApp = (() => {
	const render = () => {
		const addButton = document.querySelector('.new-button');
		addButton.addEventListener('click', () => {
			console.log('new');
		});	

		
		const projects = document.querySelectorAll('.column-btn');
		projects.forEach(project => {
			project.addEventListener('click', () => {
				console.log(project.innerText);
				projects.forEach(item => item.classList.remove('column-btn-selected'));
				project.classList.add('column-btn-selected');
			})
		})

	}
	
	renderProjects.render();
	return { render };
})();

export { renderApp };
