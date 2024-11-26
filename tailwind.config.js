/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: '#24326b',
				blueDark: '#131e42',
			},
			boxShadow: {
				innerLg: 'inset 0 0px 100px 10px rgba(0, 0, 0, 0.8)',
			},
			backgroundImage: {
				'background-gradient':
					'linear-gradient(0deg, rgba(6,13,31,1) 0%, rgba(27,40,85,1) 51%, rgba(39,55,116,1) 100%)',
			},
		},
	},
	plugins: [],
}
