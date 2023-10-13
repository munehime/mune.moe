import { error } from '@sveltejs/kit';

export async function load({ fetch }: { fetch: any }) {
	const response = await fetch('/api/commissions/statuses');
	const statuses = await response.json();

	if (statuses) {
		return statuses;
	}

	throw error(404, 'Not found');
}

export const prerender = true;
