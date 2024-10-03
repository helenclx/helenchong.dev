export default {
    layout: "main/project",
    tags: "projects",
    eleventyComputed: {
        eleventyNavigation: {
            key: "{{ title }}",
            parent: "Projects"
        }
    }
}