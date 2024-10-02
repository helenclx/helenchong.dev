export const siteName = "Helen Chong, Web Developer";
export const siteDomain = "helenchong.dev";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
	name: "Helen Chong",
	email: "contact@helenchong.dev",
	url: siteUrl + "/about"
};
export const siteDescription = siteAuthor.name + "'s developer portfolio and blog website.";
export const siteLang = "en";
export const siteLocale = "en_MY";
export const feedPath = "/blog/feed.xml"
export const siteBlog = {
	title: siteAuthor.name + "'s Developer Blog",
	desc: siteAuthor.name + " talks about tech, coding and development",
	url: siteUrl + "/blog",
	feedUrl: siteUrl + feedPath
};
