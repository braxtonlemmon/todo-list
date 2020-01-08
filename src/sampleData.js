const sampleData = (() => {
	const projects = [
		'default',
		'grocery shop',
		'clean house'
	];

	const items = [
		{ title: 'wash hair',
			project: 'default' },
		{ title: 'call john',
			project: 'default' },
		
		{ title: '5 eggs',
			project: 'grocery shop' },
		{ title: '500g potatoes',
			project: 'grocery shop' },
		{ title: '400g crushed tomatoes',
			project: 'grocery shop' },

		{ title: 'sweep kitchen',
			project: 'clean house' },
		{ title: 'clean windows',
			project: 'clean house' },
		{ title: 'start laundry',
			project: 'clean house' },
	]

	return { projects, items };
})();

export { sampleData }