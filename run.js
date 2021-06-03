const sass = require("sass");
const path = require("path");
const { promisify } = require("util");

const renderSass = promisify(sass.render);

async function run() {
  const res = await renderSass({
    file: path.join(__dirname, "src", "index.scss"),
    importer: async (url, prev, done) => {
      if (/my-aliased/.test(url)) {
        const resolved = path.join(__dirname, "src", "foo.scss");
        console.log("--> rewriting", url, "to", resolved, "\n");
        done({ file: resolved });
      }
    },
  });

  console.log("SUCCESS", res);
}

run();
