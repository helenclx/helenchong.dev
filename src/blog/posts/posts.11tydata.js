export default {
    layout: "layouts/content",
    tags: "posts",
    isArticle: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Blog Posts"
        }
    }
}
