<script lang="ts">
	import StoryboardShowcaseCard from '$lib/components/ui/StoryboardShowcaseCard.svelte';

	export let data;

	const { storyboards } = data;
</script>

<svelte:head>
	<title>Storyboards Showcase | Mune</title>
</svelte:head>

<main>
	<div class="flex flex-col justify-center items-center min-h-screen px-12 sm:px-24 pt-44 pb-24">
		<div class="flex flex-col justify-center items-center gap-8 w-full max-w-6xl">
			<ul class="grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
				{#each storyboards as storyboard (storyboard.storyboard_id)}
					<li>
						<StoryboardShowcaseCard {storyboard} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>
