export default {
	layout: "layouts/project",
	tags: "projects",
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title,
			parent: "Projects"
		}
	}
}
