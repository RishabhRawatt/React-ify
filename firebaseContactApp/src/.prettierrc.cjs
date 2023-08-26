module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwind: {
    groups: {
      flex: ["flex", "flex-row", "flex-col", "flex-grow", "flex-shrink"],
      spacing: ["m", "p"],
      // ... other groups as needed
    },
  },
};
