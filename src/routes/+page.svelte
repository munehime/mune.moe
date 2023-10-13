<script lang="ts">
	import Social from '$lib/components/links/Social.svelte';
</script>

<svelte:head>
	<title>Mune</title>
</svelte:head>

<main>
	<div class="flex flex-col justify-center items-center min-h-screen px-12 sm:px-24 py-20">
		<div class="flex flex-col justify-center items-center gap-8 w-full max-w-6xl">
			<div class="text-center">
				<div class="font-bold text-5xl">
					Hi! I&apos;m{' '}
					<span class="text-[#ffb7c5]">Mune</span>
				</div>
				<div class="mt-1.5 text-2xl">
					A student majoring Information System at University of Information Technology in
					Vietnam
				</div>
			</div>
			<hr class="w-min min-w-[35%] border-t-4 border-t-[#ffb7c5]" />
			<div class="text-center">
				<div class="font-bold">
					<Social />
				</div>
			</div>
		</div>
	</div>
</main>
