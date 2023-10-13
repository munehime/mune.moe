export function load({ url }: { url: any }) {
	return {
		url: url.href,
		pathname: url.pathname
	};
}

export const prerender = "auto";
