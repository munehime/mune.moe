import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import("tailwindcss").Config} */
export default {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				foreground: '',
				'button-primary': '#fadcda',
				'button-secondary': '#724c54'
			},
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.rank-status': {
					borderRadius: '9999px'
				},
				'.rank-status-graveyard': {
					backgroundColor: 'rgb(0 0 0)'
				},
				'.rank-status-wip': {
					backgroundColor: 'rgb(255 153 102)'
				},
				'.rank-status-pending': {
					backgroundColor: 'rgb(255 217 102)'
				},
				'.rank-status-ranked': {
					backgroundColor: 'rgb(179 255 102)'
				},
				'.rank-status-approved': {
					backgroundColor: 'rgb(102 204 255)'
				},
				'.rank-status-qualified': {
					backgroundColor: 'rgb(179 255 102)'
				},
				'.rank-status-loved': {
					backgroundColor: 'rgb(255 102 171)'
				},
				'.commission-status-open': {
					color: 'rgb(107 255 122)'
				},
				'.commission-status-close': {
					color: 'rgb(255 107 107)'
				}
			});
		})
	]
};
