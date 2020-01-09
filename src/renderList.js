import { sampleData } from './sampleData';
import { model } from './model';

const renderList = (() => {
	const main = document.querySelector('.main');
	const listBox = document.createElement('div');
	const list = document.createElement('ul');

	const render = (id) => {
		_clearList();
		_addButton();
		_makeList();
		_seedList(id);
	};

	// PRIVATE

	const _addButton = () => {
		const buttons = document.createElement('div');
		const newItemBtn = document.createElement('div');
		const editBtn = document.createElement('div');
		const deleteBtn = document.createElement('div');
		newItemBtn.classList.add('new-item-btn');
		newItemBtn.textContent = '+';
		editBtn.classList.add('editProjectBtn');
		editBtn.textContent = 'Edit';
		deleteBtn.classList.add('deleteProjectBtn');
		deleteBtn.textContent = 'Delete';
		buttons.classList.add('project-buttons');
		buttons.appendChild(editBtn);
		buttons.appendChild(deleteBtn);
		buttons.appendChild(newItemBtn);
		listBox.appendChild(buttons);
	}

	const _makeList = () => {
		list.classList.add('list');
		listBox.classList.add('list-box');
		listBox.appendChild(list);
		main.appendChild(listBox);
	};

	const _seedList = (id) => {
		// const items = sampleData.items[id];
		const items = model.getItems(id);
		items.forEach(item => _addItem(item));
		
	};

	const _addItem = (item) => {
		const listItem = document.createElement('li');
		listItem.textContent = item.title;
		listItem.classList.add('list-item');
		list.appendChild(listItem);
	};

	const _clearList = () => {
		while (list.childElementCount > 0) {
			list.removeChild(list.lastElementChild);
		}
		while (listBox.childElementCount > 0) {
			listBox.removeChild(listBox.lastElementChild);
		}
	}

	return { render };
})();

export { renderList };