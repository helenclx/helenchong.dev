export default {
    layout: "global/statement",
    tags: "statements",
    eleventyComputed: {
        desc: (data) => `${data.sitemeta.siteAuthor.name}'s ${data.keyword}.`
    }
}