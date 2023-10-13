import { error, json } from '@sveltejs/kit';
import { getOne } from '$lib/server/storyboards';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	if (Number.isNaN(params.id)) {
		throw error(400, 'Bad Request');
	}

	const id = Number(params.id);
	const storyboards = await getOne({ id });

	return json(storyboards);
};

export const prerender = false;

