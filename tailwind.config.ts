
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'], 
        headline: ['var(--font-inter)', 'sans-serif'], 
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: {
          DEFAULT: 'hsl(var(--input))',
          border: 'hsl(var(--input-border))',
        },
        ring: 'hsl(var(--ring))',
        // UQ Specific theme colors
        'uq-header-bg': 'hsl(var(--uq-header-bg))',
        'uq-nav-bg': 'hsl(var(--uq-nav-bg))',
        'uq-module-header-bg': 'hsl(var(--uq-module-header-bg))',
        'uq-module-header-text': 'hsl(var(--uq-module-header-text))',
        'uq-sidebar-bg': 'hsl(var(--uq-sidebar-bg))',
        'uq-content-bg': 'hsl(var(--uq-content-bg))',
        // Course Player Theme Colors
        'course-page-bg': 'hsl(var(--course-page-bg))',
        'course-header-bg': 'hsl(var(--course-header-bg))',
        'course-sidebar-bg': 'hsl(var(--course-sidebar-bg))',
        'course-content-area-bg': 'hsl(var(--course-content-area-bg))',
        'course-green-info-bg': 'hsl(var(--course-green-info-bg))',
        'course-green-info-foreground': 'hsl(var(--course-green-info-foreground))',
        'course-green-item-bg': 'hsl(var(--course-green-item-bg))',
        'course-green-item-foreground': 'hsl(var(--course-green-item-foreground))',
        'course-green-button-bg': 'hsl(var(--course-green-button-bg))',
        'course-green-button-hover-bg': 'hsl(var(--course-green-button-hover-bg))',
        'course-green-button-foreground': 'hsl(var(--course-green-button-foreground))',
        'course-text-primary': 'hsl(var(--course-text-primary))',
        'course-text-secondary': 'hsl(var(--course-text-secondary))',
        'course-text-tertiary': 'hsl(var(--course-text-tertiary))',
        'course-border-color': 'hsl(var(--course-border-color))',
        'course-active-item-bg': 'hsl(var(--course-active-item-bg))',
      },
      borderRadius: {
        lg: 'var(--radius)', 
        md: 'calc(var(--radius))',
        sm: 'calc(var(--radius))',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
