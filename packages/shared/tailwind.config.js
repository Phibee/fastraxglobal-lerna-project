/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("./src/tailwind/colors");

module.exports = {
      content: [
            "./lib/**/*.{js,jsx,ts,tsx,vue}",
            "./src/**/*.{js,jsx,ts,tsx,vue}",
      ],

      darkMode: ["class"],
      theme: {
            extend: {
                  colors: {
                        primary: "var(--color-primary)",
                        secondary: "var(--color-secondary)",
                  },
            },
      },
      plugins: [],
};
