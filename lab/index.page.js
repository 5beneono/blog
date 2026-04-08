export const layout = "layouts/lab.vto";

export default function* ({ search, paginate }) {
  const pages = search.pages("type=lab", "order=desc");
  const url = (n) => (n === 1) ? "/lab/" : `/lab/${n}/`;

  for (const page of paginate(pages, { url, size: 50 })) {
    yield {
      ...page,
      title: "にゃおのラボ",
      bodyClass: "body-home",
      type: "page",
    };
  }
}
