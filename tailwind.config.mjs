/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Afacad'],
				sans: ['Outfit'],
			},
			colors: {
				'light-gray': '#3b5267',
				'dark-gray': 'rgb(2 40 76)',
				'blue': '#2f6caa',
				'offwhite': 'rgb(202 212 219)',
			},
			keyframes: {
				appear: {
					"0%": {
						opacity: "0",
					},
					"25%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
			 },
				delayedappear: {
					"0%": {
						opacity: "0",
					},
					"70%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			animation: {
				appear: "appear 1.5s ease-in-out",
				delayedappear: "delayedappear 2s ease-in-out"
			}
		},
	},
	plugins: [],
}