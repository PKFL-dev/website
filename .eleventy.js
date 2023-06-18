module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/bundle.css");
    eleventyConfig.addPassthroughCopy("./src/millimetre-light-webfont.woff");
    eleventyConfig.addPassthroughCopy("./src/bizmeud-webfont.woff");
    eleventyConfig.addPassthroughCopy("./src/Karrik-Regular.woff");
    eleventyConfig.addPassthroughCopy("./src/sporting_grotesque_XX_gras.ttf");
    eleventyConfig.addShortcode(
      "card",
      (icon, title,text) =>
        `<div class="card">
        <div class="icon">
        <img alt="" src="${icon}">
        </div>
        <h1>${title}</h1>
          <p>${text}</p>
          </div>`
    );
    eleventyConfig.addShortcode(
      "card2",
      (icon, title) =>
        `<div class="card2">
        <div class="icon">
        <img alt="" src="${icon}">
        </div>
        <h1>${title}</h1>
          </div>`
    );
    eleventyConfig.addShortcode(
      "list",
      (icon, text) =>
        `<div class="list">
        <div class="icon-small">
        <img alt="" src="${icon}">
        </div>
        <h4>${text}</h4>
          </div>`
    );
    return {
        dir: {
          input: "src",
          output: "public"
        }
      }
  };
