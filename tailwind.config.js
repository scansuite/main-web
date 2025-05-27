/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0eaff',
          200: '#c7d9fe',
          300: '#a4c0fb',
          400: '#111111', // Changed from #333333 to dark black (was originally #809df7)
          500: '#4b6bef',
          600: '#0f766e', // Changed from #111111 to teal rgb(15 118 110)
          700: '#3640d3',
          800: '#2f36aa',
          900: '#2d3485',
          950: '#1c1f4b',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef5',
          200: '#d2dae8',
          300: '#abbcd4',
          400: '#8097bc',
          500: '#5f77a4',
          600: '#4c6089',
          700: '#3f4d6f',
          800: '#36425c',
          900: '#30394d',
          950: '#1a1f2e',
        },
        accent: {
          50: '#f4f6ff',
          100: '#ebeeff',
          200: '#d8e0ff',
          300: '#b8c7ff',
          400: '#8fa0ff',
          500: '#6b7eff',
          600: '#3e4eff',
          700: '#1829ff',
          800: '#0012e6',
          900: '#000db8',
          950: '#000a85',
        },
        dark: {
          50: '#CDD0D5',
          100: '#A2A7AF',
          200: '#797F8A',
          300: '#515764',
          400: '#383C45',
          500: '#1F2127',
          600: '#18191E',
          700: '#111215',
          800: '#0A0B0C',
          900: '#030303',
          950: '#000000',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0a0c0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-mesh': 'linear-gradient(45deg, rgba(17, 18, 21, 0.95) 25%, transparent 25%), linear-gradient(-45deg, rgba(17, 18, 21, 0.95) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(17, 18, 21, 0.95) 75%), linear-gradient(-45deg, transparent 75%, rgba(17, 18, 21, 0.95) 75%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glass-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'dark-glow': '0 0 15px rgba(66, 153, 225, 0.1), 0 0 3px rgba(66, 153, 225, 0.1)',
        'dark-strong': '0 10px 25px -5px rgba(0, 0, 0, 0.8)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};