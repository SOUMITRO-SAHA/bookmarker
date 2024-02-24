/** @type {import('tailwindcss').Config} */
const subtleColor = "#E5E7EB";
module.exports = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: {
          DEFAULT: "var(--background)",
          muted: "var(--background-muted)",
          error: "var(--background-error)",
        },
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--bg-muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        emphasis: "var(--bg-emphasis)",
        default: "var(--bg, white)",
        subtle: "var(--bg-subtle)",
        inverted: "var(--bg-inverted)",
        info: "var(--bg-info)",
        success: "var(--bg-success)",
        attention: "var(--bg-attention)",
        error: "var(--bg-error)",
        darkerror: "var(--bg-dark-error)",
        black: "#111111",
        brand: {
          default: "var(--brand,#111827)",
          emphasis: "var(--brand-emphasis,#101010)",
          subtle: "var(--brand-subtle,#9CA3AF)",
          accent: "var(--brand-accent,white)",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        darkgray: {
          50: "#101010",
          100: "#1c1c1c",
          200: "#2b2b2b",
          300: "#444444",
          400: "#575757",
          500: "#767676",
          600: "#a5a5a5",
          700: "#d6d6d6",
          800: "#e8e8e8",
          900: "#f3f4f6",
        },
      },
      textColor: {
        DEFAULT: "var(--text, #374151)",
        primary: "var(--text-primary)",
        emphasis: "var(--text-emphasis, #111827)",
        muted: "var(--text-muted, #9CA3AF)",
        inverted: "var(--text-inverted, white)",
        info: "var(--text-info, #253985)",
        success: "var(--text-success, #285231)",
        attention: "var(--text-attention, #73321B)",
        error: "var(--text-error, #752522)",
        brand: "var(--brand-text,'white')",
      },
      borderColor: {
        DEFAULT: "var(--border, #D1D5DB)",
        emphasis: "var(--border-emphasis, #9CA3AF)",
        subtle: `var(--border-subtle, ${subtleColor})`,
        muted: "var(--border-muted, #F3F4F6)",
        booker: `var(--border-booker, ${subtleColor})`,
        error: "var(--border-error, #AA2E26)",
        input: "var(--border-input)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fill: {
        emphasis: "var(--text-emphasis, #111827)",
        default: "var(--text, #374151)",
        subtle: "var(--text-subtle, #6B7280)",
        muted: "var(--text-muted, #9CA3AF)",
        inverted: "var(--text-inverted, white)",
        info: "var(--text-info, #253985)",
        success: "var(--text-success, #285231)",
        attention: "var(--text-attention, #73321B)",
        error: "var(--text-error, #752522)",
        brand: "var(--brand-text)",
      },
      screens: {
        pwa: { raw: "(display-mode: standalone)" },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "none" },
        },
        spinning: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up":
          "fade-in-up 600ms var(--animation-delay, 0ms) cubic-bezier(.21,1.02,.73,1) forwards",
        "fade-in-bottom":
          "fade-in-bottom cubic-bezier(.21,1.02,.73,1) forwards",
        spinning: "spinning 0.75s linear infinite",
      },
      boxShadow: {
        dropdown: "0px 2px 6px -1px rgba(0, 0, 0, 0.08)",
      },
      borderWidth: {
        "booker-width": "var(--border-booker-width, 1px)",
      },
      maxHeight: (theme) => ({
        0: "0",
        97: "25rem",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      minHeight: (theme) => ({
        0: "0",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      minWidth: (theme) => ({
        0: "0",
        ...theme("spacing"),
        full: "100%",
        screen: "100vw",
      }),
      maxWidth: (theme, { breakpoints }) => ({
        0: "0",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vw",
      }),
      backgroundImage: {
        "gradient-primary":
          "radial-gradient(162.05% 170% at 109.58% 35%, #667593 0%, #E3E3E3 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
};
