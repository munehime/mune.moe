import database from '$lib/database/mongo';

export const statuses = database.collection('statuses');
