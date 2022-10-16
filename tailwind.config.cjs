/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'xkt-red': {
					50: '#fff0f0',
					100: '#ffdddd',
					200: '#ffc0c0',
					300: '#ff9494',
					400: '#ff5757',
					500: '#ff2323',
					600: '#ff0202',
					700: '#d70000',
					800: '#b10303',
					900: '#920a0a'
				}
			}
		}
	},
	corePlugins: {
		fontSize: false
	},
	plugins: [require('tailwindcss-fluid-type')]
};
