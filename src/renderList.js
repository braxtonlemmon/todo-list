import { sampleData } from './sampleData.js';

const renderList = (() => {
	const main = document.querySelector('.main');
	const listBox = document.createElement('div');
	const list = document.createElement('ul');

	const render = () => {
		_makeList();
		_seedList();
	};

	// PRIVATE

	const _makeList = () => {
		list.classList.add('list');
		listBox.classList.add('list-box');
		listBox.appendChild(list);
		main.appendChild(listBox);
	};

	const _seedList = () => {
		const items = sampleData.items[0];
		items.forEach(item => _addItem(item));
	};

	const _addItem = (item) => {
		const listItem = document.createElement('li');
		listItem.textContent = item.title;
		listItem.classList.add('list-item');
		list.appendChild(listItem);
	};

	return { render };
})();

export { renderList };