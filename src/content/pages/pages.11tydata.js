let data = {
  layout: "default.html",
  permalink: "{{page.filePathStem | replace('/content/pages', '/')}}.html",
  date: "Last Modified",
};

if (process.env.NODE_ENV === "production") {
  data.date = "git Last Modified";
}

module.exports = data;
