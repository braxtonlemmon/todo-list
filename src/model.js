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



