import { statuses } from '$lib/database/collections';

export async function getStatuses() {
	const commissionsStatuses = await statuses.find({}).toArray();

	const storyboardsCommissionStatus =
		commissionsStatuses?.find((status) => status.type === 'storyboards')?.status ?? 0;
	const websitesCommissionStatus =
		commissionsStatuses?.find((status) => status.type === 'websites')?.status ?? 0;

	return {
		storyboards: storyboardsCommissionStatus,
		websites: websitesCommissionStatus
	};
}
