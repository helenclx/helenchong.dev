export default {
    layout: "global/content",
    tags: "posts",
    isArticle: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: "{{ title }}",
            parent: "Blog Posts"
        }
    }
}