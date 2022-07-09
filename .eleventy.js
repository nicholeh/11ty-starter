const PostCSSPlugin = require("eleventy-plugin-postcss");

module.exports = function (config) {
  config.addPlugin(PostCSSPlugin);
  config.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_includes/layouts",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
