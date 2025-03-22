export default {
    layout: "global/content",
    tags: "posts",
    isArticle: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Blog Posts"
        }
    }
}