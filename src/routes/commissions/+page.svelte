<script lang="ts">
	export let data;

	const { statuses } = data;
</script>

<svelte:head>
	<title>Commissions | Mune</title>
</svelte:head>

<main>
	<div class="flex flex-col justify-center items-center min-h-screen px-12 sm:px-24 py-20">
		<div class="flex flex-col justify-center items-center gap-8 w-full max-w-6xl">
			<div class="font-bold">
				<div class="grid grid-cols-2">
					<div class="text-left">Storyboards</div>
					<div
						class={'text-right uppercase ' +
							(statuses.storyboards === 1
								? 'commission-status-open'
								: 'commission-status-close')}
					>
						{statuses.storyboards === 1 ? 'Open' : 'Close'}
					</div>
				</div>
				<div class="grid grid-cols-2">
					<div class="text-left">Websites</div>
					<div
						class={'text-right uppercase ' +
							(statuses.websites === 1
								? 'commission-status-open'
								: 'commission-status-close')}
					>
						{statuses.websites === 1 ? 'Open' : 'Close'}
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
