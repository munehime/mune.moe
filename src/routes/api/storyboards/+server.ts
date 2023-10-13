import { json } from '@sveltejs/kit';
import { getMany } from '$lib/server/storyboards';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const storyboards = await getMany();

	return json(storyboards);
};
