import { storyboards } from '$lib/database/collections/storyboards';

export async function getMany() {
	return {
		storyboards: await storyboards.find({}).toArray()
	};
}

export async function getOne({ id }: { id: number }) {
	return {
		storyboard: await storyboards.findOne({ storyboard_id: id })
	};
}
