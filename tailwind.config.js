const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: {
		mode: "layers",
		content: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx", "public/**/*.html"],
	},
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: "#4474e4",
				bgDark: "#010101",
				bgDark2: "#111111",
				bgLight: "#f5f5f5",
				textBlack: "#0E2431",
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
		},
		container: {
			center: true,
			padding: '16px',

			screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
