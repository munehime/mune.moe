import { json } from '@sveltejs/kit';
import { getStatuses } from '$lib/server/commissions';

export const GET = async () => {
	const statuses = await getStatuses();

	const data = {
		statuses: statuses
	};

	return json(data);
};
