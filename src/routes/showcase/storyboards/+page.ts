import { error } from '@sveltejs/kit';

export async function load({ fetch }: { fetch: any }) {
	const response = await fetch('/api/storyboards');
	const data = await response.json();

	if (data) {
		return data;
	}

	throw error(404, 'Not found');
}

export const prerender = true;
