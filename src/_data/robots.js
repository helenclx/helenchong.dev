/*
	Modified from Robb Knight's script:
	https://rknight.me/blog/blocking-bots-with-nginx/
*/

import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
	const url = "https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/refs/heads/main/robots.txt";
	let txt = await EleventyFetch(url, {
		duration: "1w",
		type: "text",
	});

	const botExceptions = ["Applebot", "CCBot"];
	const botExceptionsFullStr = botExceptions.map(bot => "User-agent: " + bot)

	txt = txt
		.split("\n")
		.filter((line) => !botExceptionsFullStr.includes(line))
		.join("\n");

	const bots = txt
		.split("\n")
		.filter((line) => line.startsWith("User-agent:"))
		.map((line) => line.split(":")[1].trim().replace(/\s/gi, ".*"));

	return {
		txt: txt,
		htaccess: bots.join('|'),
	};
}
