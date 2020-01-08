import { sampleData } from './sampleData.js';

const renderList = (() => {
	const main = document.querySelector('.main');
	const listBox = document.createElement('div');
	const list = document.createElement('ul');

	const render = (id) => {
		_clearList();
		_makeList();
		_seedList(id);
	};

	// PRIVATE

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