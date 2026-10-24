/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Trois couleurs, pas huit. Les nuances se deduisent.
      colors: {
        terre: "#B4512B",
        encre: "#17120F",
        papier: "#F5EFE6",
      },
      fontFamily: {
        titre: ["Instrument Serif", "Georgia", "serif"],
        texte: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
