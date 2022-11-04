const config = require("@fastraxglobal/shared/tailwind.config");

module.exports = {
      ...config,
      content: [
            "./public/**/*.html",
            "./src/**/*.{js,jsx,ts,tsx,vue}",
            "./lib/**/*.{js,jsx,ts,tsx,vue}",
      ],
};
