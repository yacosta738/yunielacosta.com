import getReadingTime from "reading-time";
// biome-ignore lint/suspicious/noShadowRestrictedNames:No shadowing of restricted names
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
	return (tree, { data }) => {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);
		// readingTime.text will give us minutes read as a friendly string,
		// i.e. "3 min read"
		// data.astro.frontmatter.minutesRead = Math.ceil(readingTime.minutes.toFixed(2))
		data.astro.frontmatter.minutesRead = Math.ceil(readingTime.minutes);
	};
}
