const content = document.querySelector('.main');

const enableHeader = () => {
	const links = ['projects-btn', 'new-btn'];
	links.forEach(link => {
		const button = document.querySelector(`#${link}`);
		button.addEventListener('click', changePage);
	})
}

const changePage = function(e) {
	while (content.childElementCount > 0) {
		content.removeChild(content.lastElementChild);
	}

	switch (e.target.id) {
		case 'projects-btn':
			console.log('projects');
			break;
		case 'new-btn':
			console.log('new');
			break;
	}
}

enableHeader();