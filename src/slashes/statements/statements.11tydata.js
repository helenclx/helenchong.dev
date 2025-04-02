export default {
    layout: "global/slashpage",
    tags: "statements",
    eleventyComputed: {
        desc: (data) => `${data.sitemeta.siteAuthor.name}'s ${data.keyword}.`
    }
}
