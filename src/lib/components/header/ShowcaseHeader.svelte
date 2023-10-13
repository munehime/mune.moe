<script lang="ts">
	import { page } from '$app/stores';

	const navigationLinks: Array<{ title: string; path: string }> = [
		{ title: 'Storyboards', path: '/showcase/storyboards' }
		// { title: "Websites", path: "/showcase/websites" },
	];
</script>

<div class="fixed left-0 top-20 w-full h-20 z-50 transition-colors duration-200">
	<div class="w-full h-full bg-[#121212]">
		<nav class="w-full h-full">
			<ul class="flex justify-center items-center gap-9 w-full h-full">
				{#each navigationLinks as link (link.title)}
					<li class="font-bold text-lg">
						<a href={link.path}>
							<div
								class={'relative px-4 pb-1.5 text-center after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:px-1.5 after:bg-button-primary after:transition-transform after:duration-200 after:ease-out' +
									(`/${$page.url.pathname.split('/')[2]}` ===
									`/${link.path.split('/')[2]}`
										? ' text-button-primary'
										: ' text-button-secondary hover:text-button-primary after:scale-x-0 after:hover:scale-x-100')}
							>
								{link.title}
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>
