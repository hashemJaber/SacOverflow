import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'home-image': 'url("/images/home-photo.jpeg")',
            },

            colors: {
                'primary-green': {
                    '50': '#D0E1D9',
                    '100': '#B2CCC0',
                    '200': '#97B8A9',
                    '300': '#7DA492',
                    '400': '#658F7D',
                    '500': '#5A8472',
                    '600': '#517A69',
                    '700': '#3F6656',
                    '800': '#315244',
                    '900': '#253E34',
                },
                'primary-green-two': {
                    '50': '#ACCEBC',
                    '100': '#8DBBA3',
                    '200': '#71A68B',
                    '300': '#589276',
                    '400': '#437D61',
                    '500': '#346E53',
                    '600': '#32694F',
                    '700': '#25543E',
                    '800': '#1C402F',
                    '900': '#00272F',
                    main: '#346E53',
                },
            },
            ringWidth: {
                '3': '3px',
            },
        },
    },
    plugins: [],
};
export default config;
