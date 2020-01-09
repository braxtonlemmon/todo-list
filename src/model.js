let id = 0;
const model = (() => {
	const items = [];
	const projects = [];
	
	// Factory function for new project
	const Project = (title, description, id) => {
		return { title, description, id };
	};
	projects.push(Project('default', 'default project', id++));


	// Factory function for new list item
	const Item = (title, description, dueDate, priority, projectId) => {
		return { title, description, dueDate, priority, projectId };
	};

	// Form validations
	const validateProjectForm = () => {
		console.log('hey');
		const title = document.forms['ProjectForm']['title'];
		const description = document.forms['ProjectForm']['description'];
		if (title.value == '') {
			window.alert('Please enter a title.');
			title.focus();
			return false;
		}

		if (description.value == '') {
			window.alert('Please enter a description.');
			description.focus();
			return false;
		}
		return true;
	}

	const validateItemForm = () => {
		const title = document.forms['ItemForm']['title'];
		const description = document.forms['ItemForm']['description'];
		const date = document.forms['ItemForm']['dueDate'];

		if (title.value == '') {
			window.alert('Please enter a title.');
			title.focus();
			return false;
		}

		if (description.value == '') {
			window.alert('Please enter a description.');
			description.focus();
			return false;
		}

		if (date.value == '') {
			window.alert('Please enter a due date.');
			date.focus();
			return false;
		}
		return true;
	}

	// Get form data
	const _getProjectFormData = () => {
		const projectFormData = {
			title: document.getElementById('title').value,
			description: document.getElementById('description').value
		}
		return projectFormData;
	}

	const _getItemFormData = () => {
		const itemFormData = {
			title: document.getElementById('title').value,
			description: document.getElementById('description').value,
			dueDate: document.getElementById('dueDate').value,
			priority: document.getElementById('priority').checked
		}
		return itemFormData;
	}

	// Create new objects
	const createProject = () => {
		const data = _getProjectFormData();
		const project = Project(data.title, data.description, id++);
		projects.push(project);
		console.log(projects);
	}

	const createItem = (selectedId) => {
		const data = _getItemFormData();
		const item = Item(data.title, data.description, data.dueDate, data.priority, selectedId);
		items.push(item);
		console.log(items);
	}

	return { validateProjectForm,
					 validateItemForm,
					 createProject,
					 createItem,
					 projects,
					 items
	}
})();



export { model }