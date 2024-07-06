/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xxl: '1440px', // Menambahkan breakpoint baru pada 1440px
			},
			fontFamily: {
				lobster: ['"Lobster"', 'sans-serif'],
				// Add more custom font families as needed
			},
			letterSpacing: {
				'negative-4': '-0.04em', // Mengatur letter spacing menjadi -4%
				'negative-2': '-0.02em', // Mengatur letter spacing menjadi -2%
			},
		},
	},
	plugins: [],
};
