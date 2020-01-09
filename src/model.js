const projects = [];
const items = [];

// Factory function for new project
const Project = (title, description, id) => {
	return { title, description, id };
};

// Factory function for new list item
const Item = (title, description, dueDate, priority, projectId) => {
	return { title, description, dueDate, priority, projectId };
};

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

export { validateItemForm, validateProjectForm }