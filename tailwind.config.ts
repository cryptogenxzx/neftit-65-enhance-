import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(280, 100%, 60%)', // Vibrant purple
          foreground: 'hsl(0, 0%, 100%)'
        },
        secondary: {
          DEFAULT: 'hsl(190, 90%, 50%)', // Bright cyan
          foreground: 'hsl(0, 0%, 100%)'
        },
        destructive: {
          DEFAULT: 'hsl(350, 100%, 60%)', // Bright red
          foreground: 'hsl(0, 0%, 100%)'
        },
        muted: {
          DEFAULT: 'hsl(240, 20%, 20%)',
          foreground: 'hsl(240, 10%, 70%)'
        },
        accent: {
          DEFAULT: 'hsl(280, 50%, 20%)',
          foreground: 'hsl(280, 100%, 97%)'
        },
        popover: {
          DEFAULT: 'hsl(240, 20%, 15%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        card: {
          DEFAULT: 'hsl(240, 20%, 15%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        sidebar: {
          DEFAULT: 'hsl(240, 20%, 15%)',
          foreground: 'hsl(0, 0%, 100%)',
          primary: 'hsl(280, 100%, 60%)',
          'primary-foreground': 'hsl(0, 0%, 100%)',
          accent: 'hsl(280, 50%, 20%)',
          'accent-foreground': 'hsl(280, 100%, 97%)',
          border: 'hsl(240, 20%, 25%)',
          ring: 'hsl(280, 100%, 60%)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
