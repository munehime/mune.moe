import database from '$lib/database/mongo';

export const storyboards = database.collection('storyboards');
