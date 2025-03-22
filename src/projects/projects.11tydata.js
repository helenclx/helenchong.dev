export default {
    layout: "main/project",
    tags: "projects",
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Projects"
        }
    }
}