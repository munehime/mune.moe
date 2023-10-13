<script lang="ts">
	export let storyboard;
</script>

<div class="w-full select-none">
	<a href={`/showcase/storyboards/${storyboard.storyboard_id}`}>
		<div class="w-full p-6 transition-colors duration-200 bg-[#292929] hover:bg-[#3e3e3e]">
			<div class="flex flex-col justify-center">
				<div class="relative overflow-hidden">
					<img src={storyboard.image_url} alt="storyboard cover" class="object-cover" />
				</div>
				<div class="max-w-[512px] mt-3">
					<div class="font-bold text-center truncate">
						<div class="text-lg lg:text-2xl">
							{storyboard.beatmapset.title}
						</div>
						<div class="text-sm lg:text-lg">
							{storyboard.beatmapset.artist}
						</div>
					</div>
					<hr class="w-1/2 border-t-2 mx-auto my-1" />
					<div class="text-xs lg:text-base text-center">
						<span>Mapset by </span>
						<a
							href={`https://osu.ppy.sh/users/${storyboard.beatmapset.host.user_id}`}
							class="z-10 font-bold"
						>
							{storyboard.beatmapset.host.username}
						</a>
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
