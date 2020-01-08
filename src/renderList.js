import { sampleData } from './sampleData';
import { renderForm } from './renderForm';

const renderList = (() => {
	const main = document.querySelector('.main');
	const listBox = document.createElement('div');
	const list = document.createElement('ul');
	const newItemBtn = document.createElement('div');

	const render = (id) => {
		_clearList();
		_addButton();
		_makeList();
		_seedList(id);
	};

	// PRIVATE

	const _addButton = () => {
		newItemBtn.classList.add('new-item-btn');
		newItemBtn.textContent = '+';
		listBox.appendChild(newItemBtn);
	}

	const _makeList = () => {
		list.classList.add('list');
		listBox.classList.add('list-box');
		listBox.appendChild(list);
		main.appendChild(listBox);
	};

	const _seedList = (id) => {
		const items = sampleData.items[id];
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
	}

	return { render };
})();

export { renderList };