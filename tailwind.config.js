/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F0",
        ink: "#1B1B1F",
        muted: "#63636B",
        line: "#DEDAD0",
        accent: "#3454D1",
        accentDim: "#DDE3FA",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["\"IBM Plex Sans\"", "system-ui", "sans-serif"],
        mono: ["\"IBM Plex Mono\"", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
