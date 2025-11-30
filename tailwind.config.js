/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Sora', 'Manrope', 'system-ui', 'sans-serif'],
            },
            colors: {
                // LiquidGlass color palette
                obsidian: {
                    50: '#f5f5f7',
                    100: '#e8e8ed',
                    200: '#d1d1db',
                    300: '#a8a8b8',
                    400: '#6e6e7e',
                    500: '#48484f',
                    600: '#323239',
                    700: '#1d1d1f',
                    800: '#161617',
                    900: '#0a0a0b',
                    950: '#000000',
                },
                neon: {
                    cyan: '#00e5ff',
                    blue: '#0066ff',
                },
                steel: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
            },
            backgroundImage: {
                'obsidian-gradient': 'linear-gradient(135deg, #0a0a0b 0%, #1d1d1f 50%, #0a0a0b 100%)',
                'liquid-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                'neon-glow': 'radial-gradient(circle at center, rgba(0, 229, 255, 0.2) 0%, transparent 70%)',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
                'glass-lg': '0 16px 64px 0 rgba(0, 0, 0, 0.5)',
                'neon': '0 0 20px rgba(0, 229, 255, 0.5)',
                'neon-sm': '0 0 10px rgba(0, 229, 255, 0.3)',
                'neon-lg': '0 0 40px rgba(0, 229, 255, 0.6)',
                'edge-glow': 'inset 0 0 1px 0 rgba(0, 229, 255, 0.5)',
            },
            backdropBlur: {
                'xs': '2px',
            },
            animation: {
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'slide-in': 'slide-in 0.5s ease-out',
                'fade-in': 'fade-in 0.3s ease-in',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(0, 229, 255, 0.6)',
                    },
                },
                'slide-in': {
                    '0%': {
                        transform: 'translateY(20px)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
