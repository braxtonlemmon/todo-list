const sampleData = (() => {
	const projects = [
		'default',
		'grocery shop',
		'clean house'
	];

	const items = {
		0: [
			{ title: 'wash hair'},
			{ title: 'call john'}
		],

		1: [
			{ title: '5 eggs' },
			{ title: '500g potatoes' },
			{ title: '400g crushed tomatoes' },
		],
		
		2: [
			{ title: 'sweep kitchen' },
			{ title: 'clean windows' },
			{ title: 'start laundry' }
		]
	}

	return { projects, items };
})();

export { sampleData }