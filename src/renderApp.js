import { renderProjects } from './renderProjects';
import { renderList } from './renderList';

const renderApp = (() => {
	const render = () => {
		
		renderProjects.render();
		renderList.render(0);
	}

	return { render };
})();

export { renderApp };
