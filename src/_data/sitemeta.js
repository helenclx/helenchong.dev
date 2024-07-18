export default {
	siteName: "Helen Chong | Front-End Web Developer",
	siteUrl: "https://helenchong.dev" || "http://localhost:8080",
	siteDomain: "helenchong.dev",
	siteLocale: "en_MY",
	siteDescription: "Helen Chong's developer portfolio and blog website.",
	siteAuthor: {
		name: "Helen Chong",
		email: "contact@helenchong.dev",
		url: () => this.siteUrl + "/about"
	},
	siteBlog: {
		title: "Helen Chong's Developer Blog",
		desc: "Helen Chong talks about tech, coding and development",
	}
}
