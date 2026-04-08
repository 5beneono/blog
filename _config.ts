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

export default site;
