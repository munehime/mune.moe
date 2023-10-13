<script lang="ts">
	import OsuUserCard from '$lib/components/ui/OsuUserCard.svelte';

	export let data;

	const { storyboard } = data;

	function getRankStatusClass(status: number | string): string {
		switch (status) {
			case -1:
			case 'wip':
				return 'rank-status-wip';
			case 0:
			case 'pending':
				return 'rank-status-pending';
			case 1:
			case 'ranked':
				return 'rank-status-ranked';
			case 2:
			case 'approved':
				return 'rank-status-approved';
			case 3:
			case 'qualified':
				return 'rank-status-qualified';
			case 4:
			case 'loved':
				return 'rank-status-loved';
			default:
				return 'rank-status-graveyard';
		}
	}

	function getRankStatusString(status: number): string {
		switch (status) {
			case -1:
				return 'wip';
			case 0:
				return 'pending';
			case 1:
				return 'ranked';
			case 2:
				return 'approved';
			case 3:
				return 'qualified';
			case 4:
				return 'loved';
			default:
				return 'graveyard';
		}
	}
</script>

<svelte:head>
	<title
		>Storyboard Showcase: {storyboard.beatmapset.artist} - {storyboard.beatmapset.title} | Mune</title
	>
</svelte:head>

<main>
	<div
		class="relative flex flex-col justify-center items-center min-h-screen px-12 sm:px-24 pt-44 pb-24"
	>
		<div class="flex flex-col justify-center items-center gap-8 w-full max-w-6xl">
			<div>
				<div>
					<div class="flex justify-center">
						<a
							href={`https://osu.ppy.sh/beatmapsets/${storyboard.beatmapset.id}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="relative w-full h-20 sm:h-32 lg:h-44 overflow-hidden">
								<div
									class="relative w-full h-full before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/70"
								>
									<img
										src={`https://assets.ppy.sh/beatmaps/${storyboard.beatmapset.id}/covers/cover.jpg`}
										alt="beatmapset cover"
										class="w-full object-cover"
									/>
								</div>
								<div
									class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
								>
									<div class="font-bold text-center">
										<h1 class="text-xl md:text-2xl">
											{storyboard.beatmapset.title}
										</h1>
										<h2 class="text-base md:text-lg">
											{storyboard.beatmapset.artist}
										</h2>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="mt-4 text-center">
						<div>
							<ul class="flex justify-center gap-4">
								{#each storyboard.beatmapset.modes as mode (mode)}
									<li>
										<div class="relative w-8 h-8">
											<img
												src={`/assets/images/osu/modes/${mode}.png`}
												alt={mode}
												class="object-contain"
											/>
										</div>
									</li>
								{/each}
							</ul>
						</div>
						<div
							class={`w-fit mx-auto mt-4 px-8 py-1 text-neutral-800 text-lg font-black rank-status ${getRankStatusClass(
								storyboard.beatmapset.status
							)}`}
						>
							{getRankStatusString(storyboard.beatmapset.status).toUpperCase()}
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center gap-y-5 mt-4">
					<div>
						<div class="font-bold text-lg text-center">Mapset</div>
						<ul class="flex flex-wrap justify-center items-center gap-4 w-full mt-2">
							<li>
								<OsuUserCard user={storyboard.beatmapset.host} />
							</li>
						</ul>
					</div>
					{#if storyboard.beatmapset.guest_mappers && storyboard.beatmapset.guest_mappers?.length > 0}
						<div>
							<div class="font-bold text-lg text-center">
								{'Guest ' +
									(storyboard.beatmapset.guest_mappers?.length > 1
										? 'Mappers'
										: 'Mapper')}
							</div>
							<ul
								class="flex flex-wrap justify-center items-center gap-4 w-full mt-2"
							>
								{#each storyboard.beatmapset.guest_mappers as mapper (mapper.user_id)}
									<li>
										<OsuUserCard user={mapper} />
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					{#if storyboard.beatmapset.hit_sounders && storyboard.beatmapset.hit_sounders?.length > 0}
						<div>
							<div class="font-bold text-lg text-center">
								{storyboard.beatmapset.hit_sounders?.length > 1
									? 'Hitsounders'
									: 'Hitsounder'}
							</div>
							<ul
								class="flex flex-wrap justify-center items-center gap-4 w-full mt-2"
							>
								{#each storyboard.beatmapset.hit_sounders as hitSounder (hitSounder.user_id)}
									<li>
										<OsuUserCard user={hitSounder} />
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					{#if storyboard.beatmapset.graphics_designers && storyboard.beatmapset.graphics_designers?.length > 0}
						<div>
							<div class="font-bold text-lg text-center">
								{storyboard.beatmapset.graphics_designers?.length > 1
									? 'Graphics Designers'
									: 'Graphics Designer'}
							</div>
							<ul
								class="flex flex-wrap justify-center items-center gap-4 w-full mt-2"
							>
								{#each storyboard.beatmapset.graphics_designers as designer (designer.user_id)}
									<li>
										<OsuUserCard user={designer} />
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					<div>
						<div class="font-bold text-lg text-center">
							{storyboard.beatmapset.storyboarders.length > 1
								? 'Storyboarders'
								: 'Storyboarder'}
						</div>
						<ul class="flex flex-wrap justify-center items-center gap-4 w-full mt-2">
							{#each storyboard.beatmapset.storyboarders as storyboarder (storyboarder.user_id)}
								<OsuUserCard user={storyboarder} />
							{/each}
						</ul>
					</div>
					{#if storyboard.video_url && storyboard.video_url !== ''}
						<div class="flex flex-col items-center w-full">
							<div class="font-bold text-lg text-center">Video</div>
							<div class="mt-2">
								<iframe
									src={storyboard.video_url}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									class="w-[426px] h-[240px] sm:w-[640px] sm:h-[360px] lg:w-[854px] lg:h-[480px]"
								/>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</main>
