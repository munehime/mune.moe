import { error } from '@sveltejs/kit';

export async function load({ params, fetch }: { params: any; fetch: any }) {
	const response = await fetch(`/api/storyboards/${params.id}`);
	const storyboard = await response.json();

	if (storyboard) {
		return storyboard;
	}

	throw error(404, 'Not found');
}

export const prerender = false;
