import { connect } from '$lib/database/mongo';

connect()
	.then((): void => {
		console.log('MongoDB started');
	})
	.catch((err) => {
		console.log('MongoDB failed to start');
		console.log(err);
	});
