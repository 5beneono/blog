import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

const site = lume({
  location: new URL("https://5beneono.github.io/blog/"),
});

site.use(blog());

export default site;
