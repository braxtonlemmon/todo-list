
const renderForm = (() => {
	const main = document.querySelector('.main');
	
	const show = (type) => {
		const formDiv = document.createElement('div');
		formDiv.classList.add('form-div');
		if (type === 'project') {
			_projectForm(formDiv);
		} else if (type === 'item') {
			_itemForm(formDiv);
		}
		main.appendChild(formDiv);
	}

	const remove = () => {
		while (main.childElementCount > 2) {
			main.removeChild(main.lastElementChild);
		}
	}

	const _itemForm = (formDiv) => {
		formDiv.innerHTML =
			`
				<form class="item-form">
					<h2>Item Information</h2>

					<label for="title">Title</label>
					<input type="text" name="title" id="title">

					<label for="description">Description</label>
					<input type="text" name="description" id="description">

					<label for="dueDate">Due date</label>
					<input type="date" name="dueDate" id="dueDate">

					<label for="priority">Priority?</label>
					<input type="checkbox">

					<div class="form-buttons">
						<input type="button" class="button addProject" value="Create">
						<input type="button" class="button cancel" value="Cancel">
					</div>
			`
	}

	const _projectForm = (formDiv) => {
		formDiv.innerHTML =
			`
				<form class="project-form">
					<h2>Project Information</h2>
					
					<label for="title">Title</label>
					<input type="text" name="title" id="title">
					
					<label for="description">Description</label>
					<input type="text" name="description" id="description">

					<div class="form-buttons">
						<input type="button" class="button addProject" value="Create">
						<input type="button" class="button cancel" value="Cancel">
					</div>

			`
	}

	return { show, remove }
})();

export { renderForm };