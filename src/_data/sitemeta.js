export const siteName = "Helen Chong, Web Developer";
export const siteDomain = "helenchong.dev";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
	name: "Helen Chong",
	email: "contact@helenchong.dev",
	emailEncoded: '<span class="email-encoded">contact@helenchong<b>.mail</b>.dev</span>',
	emailDecoyUrl: "emailme/",
	url: siteUrl + "/about",
	fediverse: {
		handle: "@helenchong@social.lol",
		url: "https://social.lol/@helenchong"
	},
	signal: "helenchong.08"
};
export const siteDescription = siteAuthor.name + "'s developer portfolio and blog website.";
export const siteLang = "en";
export const siteLocale = "en_MY";
export const siteBlog = {
    title: siteAuthor.name + "'s Developer Blog",
};
export const feedPath = "/blog/feed.xml"
