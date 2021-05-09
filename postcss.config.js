const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [tailwindcss, autoprefixer],
  theme: {
    extend: { 
      maxWidth: {
        'screen-xl': '1080px'
      },

    }

  }
};
