const listen = () => {
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
					model.createItem();
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
}

export { listen };