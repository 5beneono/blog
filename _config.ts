import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import ogImages from "lume/plugins/og_images.ts";

const fontData = await Deno.readFile("./fonts/NotoSansCJKjp-Bold.otf");

const site = lume({
  location: new URL("https://5beneono.github.io/blog/"),
});

site.use(ogImages({
  options: {
    fonts: [
      {
        name: "Noto Sans JP",
        weight: 400,
        style: "normal",
        data: fontData.buffer,
      },
      {
        name: "Noto Sans JP",
        weight: 700,
        style: "normal",
        data: fontData.buffer,
      },
    ],
  },
}));
site.use(blog());
site.ignore("fonts");
site.copy("avatar.png");
site.copy("nyaono-avatar.png");
site.copy("js");
site.copy("exhibition");

site.preprocess("*", (pages) => {
  for (const page of pages) {
    if (page.data.type === "lab" && page.data.slug) {
      page.data.url = `/lab/${page.data.slug}/`;
    }
  }
});

export default site;
