<script lang="ts">
	import { sineIn, sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import '@fortawesome/fontawesome-svg-core/styles.css';
	import { config } from '@fortawesome/fontawesome-svg-core';
	import '../styles/app.css';
	import Header from '$lib/components/header/MainHeader.svelte';
	import ShowcaseHeader from '$lib/components/header/ShowcaseHeader.svelte';

	export let data;

	config.autoAddCss = false;

	afterNavigate(() => {
		disableScrollHandling();
		setTimeout(() => {
			scrollTo({ top: 0, behavior: 'instant' });
		}, 300);
	});
</script>

<div class="overflow-hidden scroll-smooth">
	<Header />
	{#if data.pathname.split('/')[1] === 'showcase'}
		<div
			in:fly={{ y: -20, duration: 300, delay: 300, easing: sineOut }}
			out:fly={{ y: -20, duration: 300, easing: sineIn }}
		>
			<ShowcaseHeader />
		</div>
	{/if}
	{#key data.url}
		<main
			in:fly={{ y: 200, duration: 300, delay: 300, easing: sineOut }}
			out:fly={{ y: -200, duration: 300, easing: sineIn }}
		>
			<slot />
		</main>
	{/key}
</div>

<style lang="postcss">
	:global(body) {
		background-color: #121212;
	}
</style>
