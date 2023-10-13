<script lang="ts">
	export let user;
</script>

<a href={`https://osu.ppy.sh/users/${user.user_id}`} target="_blank" rel="noopener noreferrer">
	<div
		class="w-80 px-5 py-3 bg-black/25 hover:bg-neutral-800 rounded-xl transition-color duration-200"
	>
		<div class="flex space-x-3">
			<div class="relative w-16 h-16 rounded-xl overflow-hidden">
				<img src={'https://a.ppy.sh/' + user.user_id} alt={'Avatar of ' + user.username} />
			</div>
			<div>
				<h4 class="text-xl font-bold">{user.username}</h4>
				<div class="flex space-x-1.5 items-center">
					<!--                    <img class="h-5" src={getCountryFlagByCountryCode(user.country).src} alt="Flag" />-->
					<!--                    <span class="text-lg">{getCountryInfoByCountryCode(user.country)?.name}</span>-->
				</div>
			</div>
		</div>
	</div>
</a>
