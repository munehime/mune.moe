<script lang="ts">
	import Icon from '@iconify/svelte';
	import facebookIcon from '@iconify/icons-mdi/facebook';
	import twitterIcon from '@iconify/icons-mdi/twitter';
	import githubIcon from '@iconify/icons-mdi/github';
	import youtubeIcon from '@iconify/icons-mdi/youtube';
	import twitchIcon from '@iconify/icons-mdi/twitch';
	import discordIcon from '@iconify/icons-ic/baseline-discord';
	import osuIcon from '@iconify/icons-simple-icons/osu';

	const socialLinks = [
		{
			title: 'Facebook',
			url: 'https://www.facebook.com/munehime',
			icon: facebookIcon
		},
		{
			title: 'Twitter',
			url: 'https://twitter.com/munehime2905',
			icon: twitterIcon
		},
		{
			title: 'GitHub',
			url: 'https://github.com/munehime',
			icon: githubIcon
		},
		{
			title: 'YouTube',
			url: 'https://www.youtube.com/@Munehime',
			icon: youtubeIcon
		},
		{
			title: 'Twitch',
			url: 'https://www.twitch.tv/munehime',
			icon: twitchIcon
		},
		{
			title: 'Discord',
			url: 'https://discord.com/users/203699280261808138',
			icon: discordIcon
		},
		{
			title: 'osu!',
			url: 'https://osu.ppy.sh/users/8500334',
			icon: osuIcon
		}
	];
</script>

<div>
	<ul class="flex flex-wrap justify-center gap-x-8 gap-y-3">
		{#each socialLinks as link (link.title)}
			<li>
				<a href={link.url} title={link.title} target="_blank" rel="noopener noreferrer">
					<div class="p-1 transition-colors duration-200 text-[#9a9a9a] hover:text-white">
						<Icon icon={link.icon} class="text-3xl" />
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
