export default {
    layout: "global/statement",
    tags: "statements",
    eleventyComputed: {
        desc: "{{ sitemeta.siteAuthor.name }}'s {{ keyword }}."
    }
}